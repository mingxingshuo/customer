const router = require('koa-router')()
var TagModel = require('../model/Tag.js')

router.prefix('/tag')

router.get('/',function(ctx, next){
    TagModel.find(function(err,result){
        if(err){
            console.log(err)
             ctx.body = {err: err}
        }else{
            ctx.body = {success: "查询成功", data: result}
        }
    })
})

router.get('/get_name',function(ctx,next){
    TagModel.findOne({_id: req.query.tagId},function(err,result){
        if(err){
            console.log(err)
             ctx.body = {err: err}
        }else{
            ctx.body = {success: "查询成功", data: result}
        }
    })
})



module.exports = router;