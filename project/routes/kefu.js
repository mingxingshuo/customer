const router = require('koa-router')()

router.prefix('/kefu');

router.all('/*',async (ctx,next)=>{
	await ctx.render('message_1/index')
})

module.exports = router
