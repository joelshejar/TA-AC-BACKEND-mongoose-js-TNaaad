var express = require('express')
var logger = require('morgan')
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/models",(err)=>{
    console.log(err?err:'connected to database')
})
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger('dev'))
app.listen(3000,()=>{
    console.log('server is listening to port 3000')
})