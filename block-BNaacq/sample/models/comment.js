var mongoose = require('mongoose')
var Schema = mongoose.Schema
var commentSchema = new Schema({
    content:String,

},{timestamps: true})
var Comment = mongoose.model('Comment',commentSchema)
module.exports = Comment