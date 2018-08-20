const router = require('koa-router')()
var MessageModel = require('../model/Message');
var weichat_conf = require('../conf/weichat.json');
var send =require('../scripts/send_message');
var sendUser =require('../scripts/send_user_message');
var fs = require('fs')
const multer = require('koa-multer'); 

var storage = multer.diskStorage({
  destination: function (req, file, cb) {  
    cb(null, 'uploads/')  
  },  
  filename: function (req, file, cb) {  
    var fileFormat = (file.originalname).split(".");  
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
  }
})
var upload = multer({ storage: storage }); 

router.prefix('/message');

router.post('/upload',upload.single('imageFile'),async (ctx) => {
	console.log('file path : '+ctx.req.file.path);
	/*fs.rename(ctx.req.file.path, "./public/uploads/"+ ctx.req.file.filename, function(err) {
        if (err) {
        	console.log(err);
            throw err;
        }
        console.log('上传成功!');
    })*/
    ctx.body = {filename: ctx.req.file.filename};
});

router.get('/', async (ctx, next) => {
  var messages = await MessageModel.find().limit(20).sort({_id:-1});
  ctx.body= {messages:messages}
})

router.get('/get_code', async (ctx, next) => {
	var codes= [];
	for (var key in weichat_conf) {
		codes.push(weichat_conf[key]);
	}
	console.log(codes)
  	ctx.body= {codes: codes}
})


router.post('/create', async (ctx,next)=>{
	var message = {
	  	codes:ctx.request.body.codes,
	  	task: ctx.request.body.task,
	    delay: ctx.request.body.delay,
	    type:parseInt(ctx.request.body.type),
	    contents: ctx.request.body.contents,
		img: ctx.request.body.img,
		take_over: ctx.request.body.take_over
	}
	var docs = await MessageModel.create(message);
	if (docs) {
		ctx.body= {success: '成功', data: docs}
	} else {
		ctx.body= {err: '创建失败，请检查输入是否有误'}
	}
	
})

router.post('/update', async (ctx,next)=>{
	var id = ctx.request.body.id;
	var message = {
		codes:ctx.request.body.codes,
	  	task: ctx.request.body.task,
	    delay: ctx.request.body.delay,
	    type:parseInt(ctx.request.body.type),
	    contents: ctx.request.body.contents,
	    img: ctx.request.body.img,
	    take_over: ctx.request.body.take_over
	}
	var docs = await MessageModel.findByIdAndUpdate(id,message)
	if (docs) {
		ctx.body= {success: '修改成功', data: docs}
	} else {
		ctx.body= {err: '修改失败'}
	}
})

router.get('/delete',async (ctx,next)=>{
	var id = ctx.request.query.id;
	var docs = await MessageModel.findByIdAndDelete(id)
	var docs1 = await MessageModel.find()
    ctx.body = {success: '删除成功', data: docs1}
})

router.get('/send',async (ctx,next)=>{
	var id = ctx.request.query.id;
	var take_over = ctx.request.query.take_over;
	console.log('take_over-------------'+take_over)
	if (take_over) {
		sendUser.get_message(id);
		ctx.body = {success: '发送成功'}
	} else {
		send.get_message(id);
		ctx.body = {success: '发送成功'}
	}
	
})


module.exports = router
