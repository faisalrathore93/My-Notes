/*
So basically the concept is simple if we are adding some static files like css and js files in out template view 
we basically need to add url handler for every path of the static file. But we can use middleware to handle requests 
on the bases of url to which the request is made

Example:
-------
*/


File: /project/views/home.ejs
-----------------------------

<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<link rel="stylesheet" href="/static/style.css">
</head>
<body>
<% include nav_partial.ejs %>
<center>
<h1>Welcome To your Home !</h1>
<h2>This is the home page of website</h2>

</body>
</html>

/*
On loading this page the request will be made to 127.0.0.1/static/style.css. To handle this request we need to create an 
new app.get('/static/style.css',function(){});  but every project will have hundresnd of stic file like png,css,and jpen and js
so we cannot create handler for every request so for that we can use express middleware to handle all requests which are made
static file:

app.use('/static',express.static('static'));

any request made to 127.0.0./static/... will be redir to static folder on server.
*/


File:/project/views/home.ejs
----------------------------

<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<link rel="stylesheet" href="/static/style.css">
</head>
<body>
<% include nav_partial.ejs %>
<center>
<h1>Welcome To your Home !</h1>
<h2>This is the home page of website</h2>

</body>
</html>



File:/project/app.js
--------------------


var express = require('express');

var app = express();
app.set('view engine','ejs');


app.use('/static',express.static('static')); //MiddleWare



app.get('/profile/:name',function(req,res){
	var data = {color:'red',age:'22',hobbies:['hacking','cracking','pentesting']};
	res.render('profile',{name:req.params.name,data:data});
});



app.get('/contact',function(req,res){
	res.render('contact');
})

app.get('/',function(req,res){
	res.render('home');
})

app.listen(3000);
