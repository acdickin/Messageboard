import { sendToken, sendAuthError} from '../controllers/authController';
import express from 'express';

var users =[ {"firstName":"a" , "lastName":"a" , "email":"a", "password":"a", "id":0}];

 const authRoutes=(app)=>{
	
	app.route('/auth/login')
	.post((req, res)=>{
		var user = users.find(user => user.email==req.body.email)
			if(!user) sendAuthError(res)
			if(user.password ==req.body.password){
				sendToken(user,res)
			}
			else{
				sendAuthError(res)
			}
	})

	
	app.route('/auth/register')
	.post((req, res)=>{
		var index = users.push(req.body) -1;
		var user=users[index];
		user.id= index;
		sendToken(user, res)
	})

}
export default authRoutes