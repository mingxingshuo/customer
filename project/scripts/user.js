var wechat_util = require('../util/get_weichat_client');
var MessageModel = require('../model/Message');
var FuUserModel = require('../model/FuUser');
var async = require('async');
var schedule = require("node-schedule");

FuUserModel.deleteOne({openid: 'oD4KE1G7wwq8LSU1TZ5gRD3IPfxQ'}, function (err, data) {
    console.log(data, '-------------------data1')
})
FuUserModel.deleteOne({openid: 'oD4KE1MZaV-YEQ_LQQFGw367X9Bk'}, function (err, data) {
    console.log(data, '-------------------data1')
})
FuUserModel.deleteOne({openid: 'oD4KE1NQKvYHSrTraGiBet3SzpuM'}, function (err, data) {
    console.log(data, '-------------------data1')
})
FuUserModel.deleteOne({openid: 'oD4KE1IxZ33wN_cRakxCZHCgcn8s'}, function (err, data) {
    console.log(data, '-------------------data1')
})

function get_message() {
    MessageModel.find({task: true}, function (err, messages) {
        if (messages) {
            messages.forEach(function (message) {
                send_users(null, message);
            })
        } else {
            console.log('============= 未找到信息 ==========')
        }
    });
}

function send_users(user_id, message) {
    console.log(message,'----------------message')
    var pre = new Date(Date.now() - (message.delay + 1) * 60 * 1000);
    var last = new Date(Date.now() - message.delay * 60 * 1000);
    FuUserModel.fetch(user_id, message.codes, pre, last, function (err, users) {
        console.log(users,'--------------------users')
        async.eachLimit(users, 10, function (user, callback) {
            var client = wechat_util.getClient(user.code);
            if (message.type == 0) {
                client.sendNews(user.openid, message.contents, function (err, res) {
                    console.log(err);
                    setTimeout(function () {
                        callback(null)
                    }, 50)
                });
            } else if (message.type == 1) {
                client.sendText(user.openid, message.contents[0].description, function (error, res) {
                    console.log(error);
                    setTimeout(function () {
                        callback(null)
                    }, 50)
                })
            }
        }, function (err) {
            if (users.length == 50) {
                send_users(users[49]._id, message);
            }
        })
    });
}

var rule = new schedule.RecurrenceRule();
var times = [1];
rule.second = times;
var j = schedule.scheduleJob(rule, function () {
    console.log('scheduleCronstyle:' + new Date());
    get_message()
});
