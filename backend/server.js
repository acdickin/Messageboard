'use strict';
import express from 'express';
var app =express();

import MessageRoutes from './routes/MessageRoutes';
import UserRoutes from './routes/UserRoutes';

import bodyParser from 'body-parser';

import config from './config';
import headers from './middleware/header';
import mongoose from 'mongoose';


var db =config.config.db
console.log(db)
mongoose.connect(db);
mongoose.set('debug', true)



//middleware
const PORT = 63145;
app.use(headers)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


MessageRoutes(app)
UserRoutes(app)

app.get('/',(req,res)=>{
	res.send(`node and express server is running on port ${PORT}`)
})

app.listen(PORT,()=>{
	console.log(`Your server is running on port ${PORT}`)
});
