const router = require('koa-router')()

router.prefix('/kefu');

router.all('/*',async (ctx,next)=>{
	this.redirect('/message_1/index');
})

module.exports = router
