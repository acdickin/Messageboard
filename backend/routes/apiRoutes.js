import { checkAuthenticated } from '../controllers/apiController' 
import express from 'express';

var messages =[
	{ "user":'Me', "text":'Hey'},
	{ "user":'Andrew', "text":'What\'s happening'},
	{ "user":'Me', "text":'Not a whole lot'}
]


const apiRoutes=(app)=>{

	app.route('/api/messages').get((req, res)=>{
		res.send(
			res.json(messages)
			)
	})

	app.route('/api/messages/:user').get((req, res)=>{
		var user = req.params.user;
		console.log(user)
		var	result= messages.filter(message=>message.user==user)
		res.json(result)
	})

	app.route('/api/message').post((req, res)=>{
		messages.push(req.body)
		res.json(req.body)
	})

	app.route('/api/users/me').get(checkAuthenticated, (req,res)=>{
		res.json(users[req.user]);
	})

	app.route('/api/users/me').post(checkAuthenticated, (req,res)=>{
		var user =users[req.user]
		users.firstName = req.body.firstName
		users.lastName = req.body.lastName
		res.json(user);
	})
	
}


export default  apiRoutes;