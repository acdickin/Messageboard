'use strict';
import express from 'express';
var app =express();

import messageRoutes from './routes/messageRoutes';
import userRoutes from './routes/userRoutes';

import bodyParser from 'body-parser';

import config from './config';
import headers from './middleware/header';
// import mongoose from 'mongoose';

// mongoose.Promise = global.Promise;

// mongoose.connect(config.db);

//middleware
const PORT = 63145;
app.use(headers)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


messageRoutes(app)
userRoutes(app)

app.get('/',(req,res)=>{
	res.send(`node and express server is running on port ${PORT}`)
})

app.listen(PORT,()=>{
	console.log(`Your server is running on port ${PORT}`)
});
