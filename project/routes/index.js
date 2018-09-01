const router = require('koa-router')()
var TagModel = require('../model/Tag.js')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

<<<<<<< HEAD
=======

router.get('/tag',async (ctx,next)=>{
	let tags = await TagModel.find();
	ctx.body = {
		success: "查询成功", data: tags
	}
})

>>>>>>> 4a497ce03e1c657f88222986c5c3ee3130c056c8
module.exports = router
