/*
Stream:
A data stream is an continues flow of small peices of data. 

Chunck:
The data stream is packed into chucks and then sent to the appilication.


Streams are of three types:
1-Readable Streams  [Reading files from File system/Client]
2-Writable Streams  [Seding files to cleint/File System]
3-Duplex Streams

when creating the stream the event on mystream.on('data',function(chunk){}) can be used to perfomr any tasks on that chunk 
of data.

The fs.createReadStream() doesn't work like fs.readFile() as that function collects all file in the memory before processing it

Example:
*/

var http = require('http');
var fs = require('fs');

var mystream = fs.createReadStream('file.txt','utf8');
var i=0;
mystream.on('data',function(chunk){
	console.log("Chuck Found:"+ i++);
	console.log(chunk);
})


