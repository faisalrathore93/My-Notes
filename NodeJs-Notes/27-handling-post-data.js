/*
Post request can be handled using bodyParser module in node js

Here is how to install
$npm install body-parser -save


Then we need to add: 
var bodyParser = require('body-parser')


then we need to add this line to code:
var urlencodedParser = bodyParser.urlencoded({ extended: false })

then on handler we simply pass urlencoderParser middleware in the method and let this middleware work on the body of response.

app.post('/profile',urlencodedParser,function(req,res){
	console.log(req.body);
})

*/

Example:
=======

File:/projects/app.js
---------------------
var express = require('express');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();
app.set('view engine','ejs');

app.post('/profile',urlencodedParser,function(req,res){
	console.log(req.body);
res.render('profile',{person:req.query})
})

app.listen(3000);




File:/project/view/profile.ejs
------------------------------

<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
</head>
<body>

<center>
<h1>Welcome To your Profile</h1>
	
	<form method="POST" action="/profile">
		<input type="text" name="username"><br>
		<input type="text" name="password"><br>
		<input type="submit" name="submit">
	</form>

</body>
</html>


