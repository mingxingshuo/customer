var wechat_util = require('../util/get_weichat_client');
var MessageModel = require('../model/Message');
var FuUserModel = require('../model/FuUser');
var async = require('async');
var schedule = require("node-schedule");

// FuUserModel.deleteOne({openid: 'oD4KE1G7wwq8LSU1TZ5gRD3IPfxQ'}, function (err, data) {
//     console.log(data, '-------------------data1')
// })
// FuUserModel.deleteOne({openid: 'oD4KE1MZaV-YEQ_LQQFGw367X9Bk'}, function (err, data) {
//     console.log(data, '-------------------data1')
// })
// FuUserModel.deleteOne({openid: 'oD4KE1NQKvYHSrTraGiBet3SzpuM'}, function (err, data) {
//     console.log(data, '-------------------data1')
// })
// FuUserModel.deleteOne({openid: 'oD4KE1IxZ33wN_cRakxCZHCgcn8s'}, function (err, data) {
//     console.log(data, '-------------------data1')
// })

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
    var pre = new Date(Date.now() - (message.delay + 1) * 60 * 1000);
    var last = new Date(Date.now() - message.delay * 60 * 1000);
    FuUserModel.fetch_time(user_id,message.tagId, message.codes, pre, last, function (err, users) {
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

function get_timing_message() {
    MessageModel.find({is_timing: true}, function (err, messages) {
        if (messages) {
            messages.forEach(function (message) {
                send_timing(null, message);
            })
        } else {
            console.log('============= 未找到信息 ==========')
        }
    });
}

function send_timing(user_id, message) {
    if (user_id || (message.timing_time && Date.now() - new Date(message.timing_time).getTime() >= 60 * 1000 && Date.now() - new Date(message.timing_time).getTime() < 120 * 1000)) {
        FuUserModel.fetch(user_id,message.tagId, message.codes, function (err, users) {
            var l = []
            async.eachLimit(users, 10, function (user, callback) {
                l.push(user._id)
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
                    FuUserModel.update({_id: {$in: l}}, {$set: {send_time: Date.now()}}, {multi: true, upsert: true}, function () {
                    })
                    send_timing(users[49]._id, message);
                }else{
                    FuUserModel.update({_id: {$in: l}}, {$set: {send_time: Date.now()}}, {multi: true, upsert: true}, function () {
                    })
                }
            })
        });
    }
}

var rule = new schedule.RecurrenceRule();
var times = [1];
rule.second = times;
var j = schedule.scheduleJob(rule, function () {
    console.log('scheduleCronstyle:' + new Date());
    get_message()
    get_timing_message()
});
