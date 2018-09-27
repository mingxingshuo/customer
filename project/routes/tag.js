const router = require('koa-router')()
var TagModel = require('../model/Tag.js')

router.prefix('/tag')

router.get('/',async (ctx, next) => {
    await TagModel.find(function(err,result){
        if(err){
            console.log(err)
             ctx.body = {err: err}
        }else{
            ctx.body = {success: "查询成功", data: result}
        }
    })
})

router.get('/get_name', async (ctx, next) => {
    await TagModel.findOne({_id: ctx.request.query.tagId},function(err,result){
        if(err){
            console.log(err)
             ctx.body = {err: err}
        }else{
            ctx.body = {success: "查询成功", data: result}
        }
    })
})



module.exports = router;