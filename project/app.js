const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger') 

const index = require('./routes/index')
const users = require('./routes/users')
const message = require('./routes/message')
const tag = require('./routes/tag')
const message_1 = require('./routes/message_1')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Headers', 'content-type,xfilecategory,xfilename,xfilesize');
	ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
	ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET,OPTIONS');
  if (ctx.request.method == "OPTIONS") {
    ctx.response.status = 200
  }
	await next();
}); 
 
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(message.routes(), message.allowedMethods())
app.use(tag.routes(), tag.allowedMethods())
app.use(message_1.routes(), message_1.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
