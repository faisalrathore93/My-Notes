//server can be created using http module.


//http.createServer() takes 1 function as an argument and that function takes two objects as his arguments.

//1-Request Argument.(req)
//2-Response Argument.(res)


var http = require('http');

var server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end('{"name":"imran","Color":"White"}');

});

server.listen(3000,"127.0.0.1");



//Accessing Contents of File:
//--------------------------


var http = require('http');
var fs = require('fs');
var content = fs.readFileSync('txt.txt','utf8');

server=http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(content);

})

server.listen(3000,'127.0.0.1');



