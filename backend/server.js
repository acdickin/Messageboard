'use strict';
var express = require('express')
var app =express();
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')


var messages =[
	{ "user":'Me', "text":'Hey'},
	{ "user":'Andrew', "text":'What\'s happening'},
	{ "user":'Me', "text":'Not a whole lot'}
]

var users =[ {"firstName":"a" , "lastName":"a" , "email":"a", "password":"a", "id":0}];

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
})


var api = express.Router()
var auth = express.Router()

//api 
api.get('/messages', (req, res)=>{
	res.send(
		res.json(messages)
		)
})

api.get('/messages/user', (req, res)=>{
	var user = req.params.user;
	var	result= messages.filter(message=>message.user==user)
	console.log('results: ', result)
	res.json(result)
})

api.post('/message', (req, res)=>{
	console.log(req.body)
	messages.push(req.body)
	res.json(req.body)
})

api.get('/users/me', checkAuthenticated, (req,res)=>{
	res.json(users[req.user]);
})

api.post('/users/me',  checkAuthenticated, (req,res)=>{
	var user =users[req.user]
	users.firstName = req.body.firstName
	users.lastName = req.body.lastName
	res.json(user);
})

//auth
auth.post('/login', (req, res)=>{

	var user = users.find(user => user.email==req.body.email)
		if(!user) sendAuthError(res)
		
		if(user.password ==req.body.password){
			sendToken(user,res)
		}
		else{
			sendAuthError(res)
		}
})


auth.post('/register', (req, res)=>{
	var index = users.push(req.body) -1;
	var user=users[index];
	user.id= index;
	console.log(users)
	sendToken(user, res)
})

function sendToken(user,res){
	console.log(user.id)
		var token= jwt.sign(user.id, 'sadfasdfasdfsdf'); 
		console.log(token)
		console.log(user.firstName)
		res.json({firstName:user.firstName,token});
		
}

function sendAuthError(res){
	return res.json({success:false, message:"email or password incorrect"});
}
function checkAuthenticated(req,res,next){
	console.log(req.header)
	if(!req.header('authorization')){
			return res.status(401).send({message: 'Unauthorized request. Missing Authentication Header'})
	}
	
	var token= req.header('authorization').split(" ")[1]
	var payload = jwt.decode(token,'sadfasdfasdfsdf')
	
	if(!payload){
		return res.status(401).send({message: 'Unauthorized request. Authentication Header invalid'})
	}
	
	req.user=payload;
	next();
}


app.use('/api', api)
app.use('/auth', auth)

app.listen(63145);
