const router = require('koa-router')()
var MessageModel = require('../model/Message');
var weichat_conf = require('../conf/weichat.json');
var send =require('../scripts/send_message');

const multer = require('koa-multer');//加载koa-multer模块  
//文件上传  

//配置  
var storage = multer.diskStorage({  
  //文件保存路径  
  destination: function (req, file, cb) {  
    cb(null, 'public/uploads/')  
  },  
  //修改文件名称
  filename: function (req, file, cb) {  
    var fileFormat = (file.originalname).split(".");  
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
  }  
})  
//加载配置  
var upload = multer({ storage: storage }); 

router.prefix('/message');

router.get('/', async (ctx, next) => {
  var messages = await MessageModel.find().limit(20).sort({_id:-1});

  await ctx.render('message/index', {
    messages:messages
  })
})

router.get('/create',async (ctx,next)=> {
	var codes= [];
	for (var key in weichat_conf) {
		codes.push(weichat_conf[key]);
	}
	await ctx.render('message/create',{codes:codes})
})

router.post('/create',upload.single('file'),async (ctx,next)=>{
	var message = {
	  type:parseInt(ctx.req.body.type),
	  url:ctx.req.body.url,
	  title:ctx.req.body.title,
	  des:ctx.req.body.des,
	  codes:ctx.req.body.codes,
	}
	if(ctx.req.file && ctx.req.file.filename){
		message.img= ctx.request.origin+'/uploads/'+ctx.req.file.filename
	}
	var docs = await MessageModel.create(message);
	ctx.redirect('/message/');
})

router.get('/detail/:id',async (ctx,next)=>{
	var id = ctx.params['id'];
	var message = await MessageModel.findById(id);
	var codes= [];
	for (var key in weichat_conf) {
		codes.push(weichat_conf[key]);
	}
	await ctx.render('message/detail',{
		message:message,codes:codes
	})
})

router.post('/update/:id',upload.single('file'),async (ctx,next)=>{
	var id = ctx.params['id'];
	var message = {
	  type:parseInt(ctx.req.body.type),
	  url:ctx.req.body.url,
	  title:ctx.req.body.title,
	  des:ctx.req.body.des,
	  codes:ctx.req.body.codes,
	}
	if(ctx.req.file && ctx.req.file.filename){
		message.img= ctx.request.origin+'/uploads/'+ctx.req.file.filename
	}
	var docs = await MessageModel.findByIdAndUpdate(id,message)
	ctx.redirect('/message/');
})

router.get('/send/:id',async (ctx,next)=>{
	send.get_message(ctx.params['id']);
	await ctx.render('message/send')
})

router.get('/delete/:id',async (ctx,next)=>{
	var id = ctx.req.params['id'];
	var docs = await MessageModel.findByIdAndDelete(id)
	this.redirect('/message/');
})

module.exports = router
