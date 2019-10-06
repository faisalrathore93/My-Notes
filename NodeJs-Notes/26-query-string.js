/*
the query urls like
127.0.0.1/profile?name=imran&id=1234
can be managed using req.query method
*/


Example:
=======

File: /project/app.js
----------------------

var express = require('express');
var app = express();
app.set('view engine','ejs');

app.get('/profile',function(req,res){
	console.log(req.query);
})

app.listen(3000);


output:
-------
on visiting this on browser (127.0.0.1/profile?name=imran&id=1234)
console.log() will echo "{name:'imran',id:'1234'}

Example2:
========

File:/project/app.js
--------------------
var express = require('express');
var app = express();
app.set('view engine','ejs');

app.get('/profile',function(req,res){
res.render('profile',{person:req.query})
})

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
<h1>Welcome To your Profile</h1>
<strong>Name:</strong><%= person.name %></br>
<strong>Id:</strong><%= person.id %></br>

</body>
</html>
