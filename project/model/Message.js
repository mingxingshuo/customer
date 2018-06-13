var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url); 

var MessageSchema = new Schema({
  task: Boolean,
  type:Number,//0链接 1文本 2 图片 3 
  img:String,
  url:String,
  title:String,
  delay: Number,
  des:String,
  contents:[{
    img:String,
    url:String,
    title:String,
    des:String
  }],
  codes:[String],
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


var MessageModel = db.model('Message', MessageSchema);

module.exports = MessageModel;