var express = require('express')
var app =express();

var messages =[
	{text:'app', user:'me'},
	{text:'app', user:'me'},
	{text:'app', user:'me'}
];
//middleware
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.get('/messages', (req, res)=>{
	res.send(
		res.json(messages)
		)
})
app.post('/message', (req, res)=>{
		console.log(req.body)
})


app.listen(1234);