//Every file which holds the part of the appilication code is called the module of the code. So if we can include and use
//the source code in the appilication by using the require keywork.

//Exaample:
//File:adder.js


var add = function(a,b){
	console.log(b+a);
}

module.exports= add;



//File:app.js

var add=require('./adder');
add(3,2);


//output
node app.js
5



//Explaination

module.exports= add;          ---   This Module exports the "add" part of the code in adder.js for external modules
var add=require('./adder');   ---   Here add variables hols the code whatever is exported from the adder.js
