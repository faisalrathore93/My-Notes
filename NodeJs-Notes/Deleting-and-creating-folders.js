//deleting and creating direcrtories can be done using fs module.


//Methods used:
fs.unlink(file)           ----        Delete a file
fs.mkdirSync('dirname');  ----        make a directory
fs.rmdirSync('dirname');  ----      




Examples:Delete file:

var fs = require('fs');
fs.mkdirSync('file.txt')


Example:make a dir:

var fs = require('fs');
fs.mkdirSync('dir2')


Example:removing a Directory

var fs = require('fs');
fs.rmdirSync('url2')


Example:

var fs = require('fs');

fs.mkdir('dir',function(){                              //Making a new dir
	fs.readFile('txt.txt',function(err,data){             //reading the file txt.txt in parent dir
		fs.writeFile('./url/file.txt',data);                //write that data into './url/file.txt'
	})
})





