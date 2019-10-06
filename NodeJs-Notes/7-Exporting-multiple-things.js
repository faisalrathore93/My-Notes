//Now lets say we have a multiple function or varible in one module and we want to export them to the other module
//here is how to export and manage them

//Method_1 (indirect)


//File:stuffs.js



var add = function(a,b){
console.log("Additions: "+a+b);
}


var mul = function(a,b){
	console.log("Multiplication: "+a*b);
}

var div = function(a,b){
	console.log("Division: "+a/b);
}


module.exports.add= add;
module.exports.mul= mul;
module.exports.div= div;


//File:app.js


var stuffs = require('./stuffs');

stuffs.add(3,2);
stuffs.mul(3,2);
stuffs.div(3,2);

//Output:


$node app.js

Additions: 32
Multiplication: 6
Division: 1.5


//Method 2 (Direct)

//File:stuffs.js



module.exports.add = function(a,b){
console.log("Additions: "+a+b);
}


module.exports.mul = function(a,b){
	console.log("Multiplication: "+a*b);
}

module.exports.div = function(a,b){
	console.log("Division: "+a/b);
}



//File:app.js


var stuffs = require('./stuffs');

stuffs.add(3,2);
stuffs.mul(3,2);
stuffs.div(3,2);


//Output:

$node app.js

Additions: 32
Multiplication: 6
Division: 1.5






//Method 3


//File:stuffs.js


var add = function(a,b){
console.log("Additions: "+a+b);
}


var mul = function(a,b){
	console.log("Multiplication: "+a*b);
}

var div = function(a,b){
	console.log("Division: "+a/b);
}

module.exports={
	add: add,
	mul: mul,
	div: div
};




//File:app.js

var stuffs = require('./stuffs');

stuffs.add(3,2);
stuffs.mul(3,2);
stuffs.div(3,2);
