'use strict';
var express = require('express')
var app =express();
var bodyParser = require('body-parser')



var messages =[
	{ 'user':'me','text':'no'},
	{ 'user':'Andrew','text':'yes'},
	{ 'user':'me','text':'maybe'}
]
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
	next();
})

var api = express.Router()

api.get('/messages', (req, res)=>{
	res.send(
		res.json(messages)
		)
})

api.get('/messages/:user', (req, res)=>{
	var user = req.params.user;
	var	result= messages.filter(message=>message.user==user)
	res.json(result)
})

api.post('/message', (req, res)=>{
	console.log(req.body)
	messages.push(req.body)
	res.json(req.body)
})


app.use('/api', api)

app.listen(63145);
