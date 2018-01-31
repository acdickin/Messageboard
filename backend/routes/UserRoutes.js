import { LoginUser, CreateUser, AuthUser, UpdateUser, checkAuthenticated } from '../controllers/authController';
import express from 'express';


 const UserRoutes=(app)=>{
	
	app.route('/auth/login')
		.post((req, res)=>{
				LoginUser(res,req);
		})

	
	app.route('/auth/register')
		.post((req, res)=>{
			CreateUser(req, res);
		})

	app.route('/api/users/me')
		.get(checkAuthenticated, (req,res)=>{
			AuthUser(req,res);
		})

	app.route('/api/users/me')
		.post(checkAuthenticated, (req,res)=>{
			UpdateUser(req, res);
		})

}
export default authRoutes