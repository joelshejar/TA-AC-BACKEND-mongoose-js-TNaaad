var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
    name: {type:String,lowercase:true},
    email:String,
    age:Number
})
















