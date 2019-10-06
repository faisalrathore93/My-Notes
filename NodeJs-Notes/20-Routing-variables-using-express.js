/*
The parameters in the request can be accessed using req object in the 

It doesn't matter which data you are sending in response via express the content type will be automatically send.

Example:
/*

var express = require('express');

var app = express();
app.get('/',function(req,res){
	res.send('I am home');
});

app.get('/contacts',function(req,res){
	res.send('I am contacts');
});

app.get('/profile/:id',function(req,res){
	if(req.params.id ==='21')
	{
		res.send('{"name":"imran nazir","color":"black"}');
	}

	if(req.params.id ==='22')
	{
		res.send('{"name":"imran Nissar","color":"White"}');
	}

	if(req.params.id ==='23')
	{
		res.send('{"name":"Faizan","color":"Brown"}');
	}
	res.send('<center><h1>404</h1><br> <h2>The id '+req.params.id +' does not Exist');
});
app.listen(3000);
