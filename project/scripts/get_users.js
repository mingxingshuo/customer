var schedule = require("node-schedule");

var WechatAPI = require('wechat-api');
var weichat_conf = require('../conf/weichat.json');
var weichat_apis = {};

var UserModel = require('../model/User');
var async = require('async');

function get_all(){
	for(var code in weichat_conf){
		find_users(code)
	}
}

function find_users(code) {
	UserModel.find({code:code}).sort({'_id':-1}).limit(1).exec(function(error,users){
		if(users&&users.length>0){
			get_users(code,users[0].openid)
		}else{
			get_users(code,null)
		}
	});
}

function get_users(code,openid){
    console.log('code : '+code+' , openid : '+ openid);
	if (!weichat_apis[code]) {
        var config = weichat_conf[code];
        weichat_apis[code] = new WechatAPI(config.appid, config.appsecret);
    }
    var client = weichat_apis[code];
    if(openid){
        client.getFollowers(openid,function(err,reslut){
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
                        get_users(code,reslut.next_openid);
                    }
                });
            }
            
        });
    }else{
        client.getFollowers(function(err,reslut){
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
                        get_users(code,reslut.next_openid);
                    }
                });
            }
        });
    }
    
}

get_all()

schedule.scheduleJob('* * * 1 * *', function(){
        console.log('scheduleCronstyle:' + new Date());
        get_all()
 });

module.exports.get_all = get_all
