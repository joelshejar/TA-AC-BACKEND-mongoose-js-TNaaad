var express = require('express')
var logger = require('morgan')
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/models",{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    console.log(err?err:'Connected to database')
})
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger('dev'))
app.listen(3000,()=>{
    console.log('listening to port 3000')
})