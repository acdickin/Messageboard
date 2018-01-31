import { c} from '../controllers/apiController' 
import express from 'express';

var messages =[
	{ "user":'Me', "text":'Hey'},
	{ "user":'Andrew', "text":'What\'s happening'},
	{ "user":'Me', "text":'Not a whole lot'}
]


const apiRoutes=(app)=>{

	app.route('/messages')
		.get((req, res)=>{
			res.send(
				res.json(messages)
				)
		})

	app.route('/api/messages/:user')
		.get((req, res)=>{
			var user = req.params.user;
			console.log(user)
			var	result= messages.filter(message=>message.user==user)
			res.json(result)
		})

	app.route('/api/message')
		.post((req, res)=>{
			messages.push(req.body)
			res.json(req.body)
		})
	
}


export default  apiRoutes;