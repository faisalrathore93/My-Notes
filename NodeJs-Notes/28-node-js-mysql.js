Checking sql connection
=======================



var express = require('express');
var mysql = require('mysql');

var app= express();

var connection = mysql.createConnection({
	//connection properties
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'nodeapp'
});

connection.connect(function(error){
	if(!!error)
	{
		console.log("error");
	}
	else
	{
		console.log("connected");
	}
});

app.listen(4000);





Checking Query Errors
======================

var express = require('express');
var mysql = require('mysql');

var app= express();

var connection = mysql.createConnection({
	//connection properties
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'nodeapp'
});

connection.connect(function(error){
	if(!!error)
	{
		console.log("error");
	}
	else
	{
		console.log("connected");
	}
});



app.get('/users',function(req,res){
	connection.query("SELECT * FROM users;",function(error,rows,field)
	{
		if(!!error)
		{
			console.log("Error in Query");

		}
		else{
			console.log('Succefully Executed the Query');
		}
	})

})




app.listen(4000);







Getting Records from Database
=============================
var express = require('express');
var mysql = require('mysql');

var app= express();

var connection = mysql.createConnection({
//connection properties
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'nodeapp'
});

connection.connect(function(error){
	if(!!error)
	{
		console.log("error");
	}
	else
	{
		console.log("connected");
	}
});



app.get('/users',function(req,res){
	connection.query("SELECT * FROM users;",function(error,rows,field)
	{
		if(!!error)
		{
			console.log("Error in Query");

		}
		else{
			console.log('Succefully Executed the Query');
			console.log(rows);
      res.send("Hello"+rows[1].username);
		}
	})

})

app.listen(4000);



using mysql Connection pool
===========================

/*
if your website is capable of serving few connection at a time we can pool the other connection and tell them to wait until
the space gets vacant.
*/




