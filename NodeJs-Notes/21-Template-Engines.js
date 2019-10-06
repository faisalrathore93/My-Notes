/*
Lets suppose we have to create dynamic html pages in node js. We have to use templates for that. A template processor
(also known as a template engine or template parser) is software designed to combine templates with a data model to
produce result documents. The language that the templates are written in is known as a template language or templating
language.


The simple and light weight template in node js in "ejs" template.

$npm verify cache
$npm install ejs -save

we need to create views for template engines to render on paticular conditions thos views are saved inside views folder of an 
node js project. Example if we need to create an app which take name parameter in http-get and ruturn the name and some other
details from the app.

*/

file: project/views/profile.ejs
-------------------------------

<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
</head>
<body>

<center>
<h1>Welcome To your Profile <%= person %></h1>
<h2>You age is <b> <%= data.age %></h2>
<h2>You color is <b> <%= data.color %></h2>
</body>
</html>



file: project/views/app.js
--------------------------


var express = require('express');

var app = express();
app.set('view engine','ejs');
app.get('/',function(req,res){
	res.sendFile(__dirname+'/website/index.html');
})

app.get('/profile/:id',function(req,res){
	var data = {'age':'21','color':'red'};
	res.render('profile',{person:req.params.id,data:data});
})
app.listen(3000);



output
------


<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
</head>
<body>

<center>
<h1>Welcome To your Profile nazir</h1>
<h2>You age is <b> 21</h2>
<h2>You color is <b> red</h2>
</body>
</html>
