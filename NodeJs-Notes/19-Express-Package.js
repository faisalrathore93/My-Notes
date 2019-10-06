/*
Express is used for routing in the node js app.

Express can be used to respond to 

GET           ---         app.get(route,function(req,res));
POST          ---         app.get(route,function(req,res));
DELETE        ---         app.get(route,function(req,res));

Example:
*/

var express = require('http');

var app = express();

app.get('/',function(req,res){
res.send('I am Home-Page');
});


app.get('/contacts',function(req,res){
res.send('I am Contacts-Page');
});


app.get('/api',function(req,res){
res.send('I am API');
});


app.listen(3000);

