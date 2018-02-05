import {getAllMessages, getMessagesByUser} from '../controllers/MessageController' 
import express from 'express';


const MessageRoutes=(app)=>{

	app.route('/messages')
		.get((req, res)=>{
			getAllMessages()
		}

	app.route('/api/messages/:user')
		.get((req, res)=>{
			 getMessagesByUser(req, res)
		})

	app.route('/api/message')
		.post((req, res)=>{
			messages.push(req.body)
			res.json(req.body)
		})
	
}


export default  MessageRoutes;