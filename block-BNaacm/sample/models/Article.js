var mongoose = require('mongoose')

var articleSchema = new Schema({
    title:String,
    description:String
}, {timestamps: true})
module.exports = mongoose.model('Article',articleSchema)