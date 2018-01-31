var config = require('../config');
import jwt  from 'jsonwebtoken'

export const sendToken= (user,res)=>{
	var token= jwt.sign(user.id, config.secret); 
	res.json({firstName:user.firstName,token});
		
}

export const sendAuthError = (res)=>{
	return res.json({success:false, message:"email or password incorrect"});
}