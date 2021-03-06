var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url); 

var UserSchema = new Schema({
  openid: String,
  code:String,
  nickname: String,
  unionid:String,
  sex: String,
  province: String,
  city: String,
  country: String,
  headimgurl: String,
  action_time:Number,
  createAt: {
      type: Date,
      default: Date.now
  },
  updateAt: {
      type: Date,
      default: Date.now
  }
},{
    timestamps: { createdAt: 'createAt', updatedAt: 'updateAt' }
});

UserSchema.statics = {
    fetch(id,codes, cb) {
        if (id) {
            return this.find({_id: {$lt: id},code:{$in:codes}})
                .limit(50)
                .sort({'_id':-1})
                .exec(cb);
        }else {
            return this.find({code:{$in:codes}})
                .limit(50)
                .sort({'_id':-1})
                .exec(cb);
        }

    }
}

var UserModel = db.model('User', UserSchema);

module.exports = UserModel;