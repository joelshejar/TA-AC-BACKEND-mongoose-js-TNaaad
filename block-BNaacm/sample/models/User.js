var mongoose = require('mongoose')

var userSchema = new Schema({
    name:String,
    age:Number,
    password:{type:String,min:5,max:15},
    createdAt:{type:Date,default:Date.now}
}, {timestamps: true})
var User = mongoose.model('User',userSchema)
module.exports = User