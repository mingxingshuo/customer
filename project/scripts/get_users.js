var schedule = require("node-schedule");

var WechatAPI = require('wechat-api');
var weichat_conf = require('../conf/weichat.json');
var weichat_apis = {};

var UserModel = require('../model/User');
var async = require('async');

function get_all(){
    var codes = [];
	for(var code in weichat_conf){
		codes.push(code)
	}
    async.each(codes,function(code,callback){
        find_users(code,callback)
    },function(err,res){
        console.log('---------user update--end-----------')
    });
}

function find_users(code,callback) {
    UserModel.remove({code:code},function(err,doc){
        get_users(code,null,callback);
    });
}

function get_users(code,openid,next){
    console.log('code : '+code+' , openid : '+ openid);
	if (!weichat_apis[code]) {
        var config = weichat_conf[code];
        weichat_apis[code] = new WechatAPI(config.appid, config.appsecret);
    }
    var client = weichat_apis[code];
    if(openid){
        client.getFollowers(openid,function(err,reslut){
            if(err){
                console.err(err)
            }
            console.log(reslut);
            if(reslut.data && reslut.data.openid){
                async.eachLimit(reslut.data.openid,10,function(openid,callback){
                    var item = {'openid':openid,'code':code};
                    UserModel.findOneAndUpdate(item,item,{upsert:true,rawResult:true},function(err,result){
                        if(err){
                            console.log(err);
                        }
                        callback(null);
                    });
                },function(error){
                    if(reslut.next_openid){
                        console.log('-----------code -------'+code+'---------update--contitue------')
                        get_users(code,reslut.next_openid,next);
                    }else{
                        console.log('-----------code -------'+code+'---------update--end')
                        next(null)
                    }
                });
            }else{
                console.log('-----------code -------'+code+'---------update--end')
                next(null)
            }
            
        });
    }else{
        client.getFollowers(function(err,reslut){
            if(err){
                console.err(err)
            }
            console.log(reslut);
            if(reslut.data && reslut.data.openid){
                async.eachLimit(reslut.data.openid,10,function(openid,callback){
                    var item = {'openid':openid,'code':code};
                    UserModel.findOneAndUpdate(item,item,{upsert:true,rawResult:true},function(err,result){
                        if(err){
                            console.log(err);
                        }
                        callback(null);
                    });
                },function(error){
                    if(reslut.next_openid){
                        console.log('-----------code -------'+code+'---------update--contitue------')
                        get_users(code,reslut.next_openid,next);
                    }else{
                        console.log('-----------code -------'+code+'---------update--end')
                        next(null)
                    }
                });
            }else{
                console.log('-----------code -------'+code+'---------update--end')
                next(null)
            }
        });
    }   
}

get_all()

var rule = new schedule.RecurrenceRule();
var times = [1, 9, 12, 15, 18, 21, 24];
rule.hour = times;
rule.minute = 0;
var j = schedule.scheduleJob(rule, function () {
    console.log('scheduleCronstyle:' + new Date());
    get_all()
});


/*schedule.scheduleJob('* * 1 * * *', function(){
        console.log('scheduleCronstyle:' + new Date());
        get_all()
 });*/

module.exports.get_all = get_all
