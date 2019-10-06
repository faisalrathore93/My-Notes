/*
Now lets suppose You want to run javascript code inside the template. Use the below method.

-> In ejs template engine if you want to echo data on page we used <%= data.property %>
-> but if we need to print javascript in html page we need to use <% code... %> without =

Example we have a json object with an array hobbies and we need to loop in those objects and print them dynamically
*/

File: project/app.js
--------------------


var express = require('express');

var app = express();
app.set('view engine','ejs');


app.get('/profile/:name',function(req,res){
	var data = {color:'red',age:'22',hobbies:['hacking','cracking','pentesting']};
	res.render('profile',{name:req.params.name,data:data});
});

app.listen(3000);



File:/project/views/profile.ejs
-------------------------------

<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
</head>
<body>

<center>
<h1>Welcome To your Profile <%= name %></h1>
<h2>Hobbies</h2>
<% data.hobbies.forEach(function(item){ %>
	<li> <%= item %>
<%})%>
</body>
</html>
