
/*
Here i am creating a new server and creating a new read stream and reading file.txt and piping that output to the response
of an http request.

*/


var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){   
	res.writeHead(200,{'Content-Type':'text/plain'});  
	myReadStream = fs.createReadStream('file.txt'); 
myReadStream.pipe(res);                                  

})


server.listen(3000,'127.0.0.1');


===========================================================================================================



/*
The most important is to set {'Content-Type':'text/html'} and an file you want to read i.e index.html

*/



var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	myReadStream = fs.createReadStream('index.html');
myReadStream.pipe(res);

})


server.listen(3000,'127.0.0.1');

==============================================================================================================

/*
The imran object is created and sent in the response but that javascript object is converted into string so we
are using JSON.stringify() function to do that.
*/


var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	var imran = {"name":"imran","color":"red"};
	res.end(JSON.stringify(imran));

})


server.listen(3000,'127.0.0.1');
