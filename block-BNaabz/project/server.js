var express = require('express')
var mongoose  = require('mongoose')
mongoose.connect("mongodb://localhost/sample",{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    console.log(err?err:"Connected to database")
})
var app = express()
app.use(express.json())
app.listen(3000, ()=>{
    console.log('listening to port 3000')
})








