const router = require('koa-router')()
var MessageModel = require('../model/Message');
var weichat_conf = require('../conf/weichat.json');
var send =require('../scripts/send_message');
var sendUser =require('../scripts/send_user_message');
var fs = require('fs')
const multer = require('koa-multer'); 

var storage = multer.diskStorage({
  destination: function (req, file, cb) {  
  	//console.log('destination');
    cb(null, __dirname+'/../public/uploads/')  
  },  
  filename: function (req, file, cb) { 
  	//console.log('filename'); 
    var fileFormat = (file.originalname).split(".");  
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
  }
})
var upload = multer({ storage: storage }); 

router.prefix('/message');

router.post('/upload',upload.single('imageFile'),async (ctx, next) => {
    ctx.body = {filename: ctx.req.file.filename};
});

router.get('/', async (ctx, next) => {
  let messages = await MessageModel.find().limit(20).sort({_id:-1});
  for (let i = 0; i < messages.length; i++) {
    let d = new Date(messages[i].timing_time);
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let date = d.getDate()
    let hour = d.getHours()
    let minutes = d.getMinutes() 
    let seconds = d.getSeconds()
    if(month < 10) {
        month = '0' + month
    }
    if(date < 10) {
        date = '0' + date
    }
    if(hour < 10) {
        hour = '0' + hour
    }
    if(minutes < 10) {
        minutes = '0' + minutes
    }
    if(seconds < 10) {
        seconds = '0' + seconds
    }
    let times= year + '-' + month + '-' + date + ' ' + hour + ':' + minutes + ':' + seconds; 
    messages[i].time = times
  }
  ctx.body= {messages:messages}
})	

router.get('/get_code', async (ctx, next) => {
	var codes= [];
	for (var key in weichat_conf) {
		codes.push(weichat_conf[key]);
	}
  	ctx.body= {codes: codes}
})


router.post('/create', async (ctx,next)=>{
	var message = {
	  	codes:ctx.request.body.codes,
	  	task: ctx.request.body.task,
        is_timing: ctx.request.body.is_timing,
        delay: ctx.request.body.delay,
	    timing_time: ctx.request.body.timing_time,
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
        is_timing: ctx.request.body.is_timing,
        delay: ctx.request.body.delay,
        timing_time: ctx.request.body.timing_time,
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
