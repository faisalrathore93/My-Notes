/*
req.url contains the url which is being requested. So if you are requesting http://127.0.0.1/docs/api then the 
req.url will contains /docs/api values so we can use req.url to do basic routing.

Example:

*/


var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

	if(req.url==='/' || req.url==='/home')
	{
	res.writeHead(200,{'Content-Type':'text/html'});
	fs.createReadStream('index.html').pipe(res);
	}

	else if(req.url==='/api')
	{
	res.writeHead(200,{'Content-Type':'application/json'});
	var data = [{'name':'imran','color':'white'},{'name':'faizan','color':'white'}];	
	res.end(JSON.stringify(data));
	}

})

server.listen(3000,'127.0.0.1');
