/*
Writing streams can be used to write files to the File System or send them to the client.

In this programm one read stream and one write stream is used to read file.txt and write those chucks into file2.txt

*/



var http = require('http');
var fs = require('fs');

 var myReadStream = fs.createReadStream("file.txt");
 var myWriteStream = fs.createWriteStream("file2.txt");
 
 myReadStream.on('data',function(chunk){
 	console.log("chunk Found:");
 	myWriteStream.write(chunk);
 })


