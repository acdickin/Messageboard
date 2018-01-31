var config = require('../config');
import jwt  from 'jsonwebtoken'


export const checkAuthenticated = (req,res,next)=>{
	if(!req.header('authorization')){
			return res.status(401).send({message: 'Unauthorized request. Missing Authentication Header'})
	}
	
	var token= req.header('authorization').split(" ")[1]
	var payload = jwt.decode(token,config.secret)
	
	if(!payload){
		return res.status(401).send({message: 'Unauthorized request. Authentication Header invalid'})
	}
	
	req.user=payload;
	next();
}
