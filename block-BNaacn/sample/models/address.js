var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var addressSchema = new Schema({
    village:String,
    city:String,
    state:String,
    pin:Number,
    likes:{type:Number,default:0},
    user:ObjectId
},{timestamps: true})
module.exports = mongoose.model('Address',addressSchema)