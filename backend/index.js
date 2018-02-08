'use strict';
var express = require('express')
var app =express();

var MessageRoutes = require('./routes/MessageRoutes')
var UserRoutes = require('./routes/UserRoutes')

var bodyParser = require('body-parser')

var config = require('./config')
var headers = require('./middleware/header')
var mongoose = require('mongoose')


var db =config.config.db
console.log(db)
mongoose.connect(db);
mongoose.set('debug', true)



//middleware
const PORT = 63145;
app.use(headers)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


MessageRoutes(app)
UserRoutes(app)

app.get('/',(req,res)=>{
	res.send(`node and express server is running on port ${PORT}`)
})

app.listen(PORT,()=>{
	console.log(`Your server is running on port ${PORT}`)
});
