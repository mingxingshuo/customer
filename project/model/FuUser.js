var mongoose = require('mongoose');
// mongoose.set('debug',true)
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
    tagIds: Array,
    send_time: Number,
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
    fetch(id, tagId, codes, cb) {
        if (tagId) {
            if (id) {
                return this.find({
                    _id: {$lt: id},
                    $or:[{send_time: {$lt: Date.now() - 2 * 3600 * 1000}},{send_time:null}],
                    tagIds: {$elemMatch: {$eq: tagId}},
                    code: {$in: codes},
                    action_time: {$gt: Date.now() - 48 * 3600 * 1000}
                })
                    .limit(50)
                    .sort({'_id': -1})
                    .exec(cb);
            } else {
                return this.find({
                    $or:[{send_time: {$lt: Date.now() - 2 * 3600 * 1000}},{send_time:null}],
                    tagIds: {$elemMatch: {$eq: tagId}},
                    code: {$in: codes},
                    action_time: {$gt: Date.now() - 48 * 3600 * 1000}
                })
                    .limit(50)
                    .sort({'_id': -1})
                    .exec(cb);
            }
        } else {
            if (id) {
                return this.find({
                    _id: {$lt: id},
                    $or:[{send_time: {$lt: Date.now() - 2 * 3600 * 1000}},{send_time:null}],
                    code: {$in: codes},
                    action_time: {$gt: Date.now() - 48 * 3600 * 1000}
                })
                    .limit(50)
                    .sort({'_id': -1})
                    .exec(cb);
            } else {
                return this.find({
                    $or:[{send_time: {$lt: Date.now() - 2 * 3600 * 1000}},{send_time:null}],
                    code: {$in: codes},
                    action_time: {$gt: Date.now() - 48 * 3600 * 1000}
                })
                    .limit(50)
                    .sort({'_id': -1})
                    .exec(cb);
            }
        }

    },
    fetch_time(id, tagId, codes, pre, last, cb) {
        if (tagId) {
            if (id) {
                return this.find({
                    _id: {$lt: id},
                    tagIds: {$elemMatch: {$eq: tagId}},
                    code: {$in: codes},
                    createAt: {$gte: pre, $lt: last}
                })
                    .limit(50)
                    .sort({'_id': -1})
                    .exec(cb);
            } else {
                return this.find({
                    tagIds: {$elemMatch: {$eq: tagId}},
                    code: {$in: codes},
                    createAt: {$gte: pre, $lt: last}
                })
                    .limit(50)
                    .sort({'_id': -1})
                    .exec(cb);
            }
        } else {
            if (id) {
                return this.find({_id: {$lt: id}, code: {$in: codes}, createAt: {$gte: pre, $lt: last}})
                    .limit(50)
                    .sort({'_id': -1})
                    .exec(cb);
            } else {
                return this.find({code: {$in: codes}, createAt: {$gte: pre, $lt: last}})
                    .limit(50)
                    .sort({'_id': -1})
                    .exec(cb);
            }
        }
    }
}

var FuUserModel = db.model('User', FuUserSchema);

module.exports = FuUserModel;