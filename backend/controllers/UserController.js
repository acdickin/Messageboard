var config = require('../config');
import jwt  from 'jsonwebtoken'
import mongoose from 'mongoose'
import {UserSchema} from '../models/UserModel'

const User = mongoose.model('user', UserSchema);
 

export const LoginUser=(req, res)=>{
// var user = users.find(user => user.email==req.body.email)
// 	if(!user) sendAuthError(res)
// 	if(user.password==req.body.password){
// 		sendToken(user,res)
// 	}
// 	else{
// 		sendAuthError(res)
// 	}

//find one user
//check if email is the same
//check if password is the same
//if all works send token
//else send error


}
export const CreateUser=(req, res)=>{
	console.log("create user:" ,req.body)
	let newUser= new User({
		username: req.body.username,
		email: req.body.email,
		firstname: req.body.firstname,
  	lastname: req.body.lastname,
		passhash:bcrypt.hashSync(req.body.password, 10)
	})
	newUser.save(
		(newUser,err)=>{
			if(err){
				throw err;
			}
			else{
				delete newUser[passhash]
				
				sendToken(newUser, res)
				
				res.json({
					user:newUser,
					message:'successful'
				})

			}
	})

}

export const AuthUser=(req, res)=>{
	
	var UserId=req.id;
	User.findById(UserId, (err,user)=>{
		if(err){
			res.send(err);
		}
		res.json(user);
	})
	
}

export const UpdateUser=(req, res)=>{
	
	var UserId=req.id;
	User.updateOne(
		{_id:UserId}
		,{
			$set:{"firstName" : req.body.firstName, "lastName" : req.body.lastName}
		},
		(err, results)=>{
			if(err){
				throw err
			}
			else{
				console.log(results.result)
				res.json(results.result)
				
			}
		}
	)
	res.json(user);
}


function sendToken(user,res){
	var token= jwt.sign(user.id, config.secret); 
	res.json({firstName:user.firstName,token});
		
}

function sendAuthError(res){
	return res.json({success:false, message:"email or password incorrect"});
}


export const checkAuthenticated = (req,res,next) =>{
	if(!req.header('authorization')){
			return res.status(401).send({message: 'Unauthorized request. Missing Authentication Header'})
	}
	
	var token= req.header('authorization').split(" ")[1]
	var payload = jwt.decode(token,config.secret)
	
	if(!payload){
		return res.status(401).send({message: 'Unauthorized request. Authentication Header invalid'})
	}
	
	req.id=payload;
	next();
}
