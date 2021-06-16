var express = require('express')
var logger = require('morgan')
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/models",(err)=>{
    console.log(err?err:'connected to database')
})
var app = express()
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send('welcome')
})
app.listen(3000,()=>{
    console.log('listening to port 3000')
})


