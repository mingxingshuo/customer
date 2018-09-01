var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').fuwu_mongodb;
var db = mongoose.createConnection(connect_url); 


var TagSchema = new Schema({
  name:{ type: String, required: true }
});

var TagModel = db.model('Tag', TagSchema);
module.exports = TagModel;

