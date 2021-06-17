var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
    name:String,
    age:Number,
    email:String,
    password:{type:String,minlength:5},
    favourites:[String]
}, {timestamps: true})

module.exports = mongoose.model('User',userSchema)