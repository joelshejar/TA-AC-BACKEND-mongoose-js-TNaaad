var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var addressSchema = new Schema({
    village:String,
    city:String,
    state:String,
    pin:Number,
    user:Schema.Types.ObjectId
})