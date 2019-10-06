/*
Pipes is an methods used to pipe chunks from read stream to write stream.


In this programm whatever is written in file.txt will be readed and then the data chunks will be pipped to the write stream
points towards the file2.txt

*/

var http = require('http');
var fs = require('fs');

var readS = fs.createReadStream('file.txt');
var writeS = fs.createWriteStream('file2.txt');

readS.pipe(writeS);



//Using Pipes to send data in the http response




var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){             //Creating new server
	res.writeHead(200,{'Content-Type':'text/plain'});           //setting up headers
	myReadStream = fs.createReadStream('file.txt');             //Creating an readstream to read file.txt
myReadStream.pipe(res);                                       //Piping the readed data into response of http req.

})


server.listen(3000,'127.0.0.1');
