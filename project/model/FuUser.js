var mongoose = require('mongoose');
mongoose.set('debug',true);
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').fuwu_mongodb;
var db = mongoose.createConnection(connect_url);

var FuUserSchema = new Schema({
    openid: String,
    code: String,
    nickname: String,
    unionid: String,
    sex: String,
    province: String,
    city: String,
    country: String,
    headimgurl: String,
    action_time: Number,
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: {createdAt: 'createAt', updatedAt: 'updateAt'}
});

FuUserSchema.statics = {
    fetch(id, codes, pre, last, cb) {
        if (id) {
            return this.find({_id: {$lt: id}, code: {$in: codes}, creatAt: {$gte: pre, $lt: last}})
                .limit(50)
                .sort({'_id': -1})
                .exec(cb);
        } else {
            return this.find({code: {$in: codes}, creatAt: {$gte: pre, $lt: last}})
                .limit(50)
                .sort({'_id': -1})
                .exec(cb);
        }

    }
}

var FuUserModel = db.model('User', FuUserSchema);

module.exports = FuUserModel;