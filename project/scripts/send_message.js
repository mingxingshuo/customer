var WechatAPI = require('wechat-api');
var weichat_conf = require('../conf/weichat.json');
var weichat_apis = {};

var MessageModel = require('../model/Message');
var UserModel = require('../model/User');
var async = require('async');
var flag =false;

function get_message(id) {
	flag =true;
	MessageModel.findById(id).exec(function(err,message){
		if(message){
			send_users(null,message);
		}
	});
}

function send_users(user_id,message){
	UserModel.fetch(user_id,message.codes,function(err,users){
		async.eachLimit(users,10,function(user,callback){
			if (!weichat_apis[user.code]) {
                var config = weichat_conf[user.code];
                weichat_apis[user.code] = new WechatAPI(config.appid, config.appsecret);
            }
            var client = weichat_apis[user.code];
            if(message.type==0){
            	var articles = [
				 {
				   "title":message.title,
				   "description":message.des,
				   "url":message.url,
				   "picurl":message.img
				 }];

				client.sendNews(user.openid, articles, function(err,res){
					console.log(error);
					callback(null)
				});
            }else if(message.type==1){
            	client.sendText(user.openid,message.des,function(error,res){
            		console.log(error);
            		callback(null)
            	})
            }
		},function(err){
			if(users.length==50){
				send_users(users[49]._id,message);
			}else{
				flag =false;
			}
		})
	});
}


module.exports.get_message = get_message
