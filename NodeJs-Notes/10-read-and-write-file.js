/*
The file can be read and wring using fs module in node js. so for reading and writing files we need to import the fs module
to the appilicatiom. There are two version of readFile and WriteFiles methods. An synchronous method and an Asyncronus method

1-Synchronous methods are those methods which will complete the previous task before moving to the next statement of code.
2-Asynchronous method is Opposite to 1
*/



//------------->Synchronmous Mehthos<----------------------

//exporting the module

var fs = require('fs');

//this is the method used read files from the system.
fs.readFileSync('file.txt','encoding_type');

//This is the method to write files
fs.writeFileSync('file.txt','data');


Example:
var fs = require('fs');
var x = fs.readFileSync('url.sh','utf8');
console.log(x);

Exampple:

var fs = require('fs');
x= 'i am the data to be written'
fs.readWriteSync('writeMe.txt',x);


//------------->Asynchronmous Mehthos<----------------------
//ReadFile:
fs.readFile('file.txt','encoding','function(){err,data});


Example:
var fs = require('fs');
fs.readFile('url.sh','utf8',function(err,data){
	console.log(data);
})


//WriteFile:
//Syntax:
fs.writeFile('write.txt',data);

//Example:


var fs = require('fs');
fs.readFile('url.sh','utf8',function(err,data){
	console.log(data);
	fs.writeFile('write.sh',data);
})
