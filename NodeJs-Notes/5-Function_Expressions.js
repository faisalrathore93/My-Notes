//normal function

function sayHI(){
	console.log("HI");
}

sayHI();








//Function Expression
//When assiging the fucntion to a variable the variable is called Function expression

var imran = function(){
	console.log("Hiiii");
}

imran();








//Passing params to a function

function add(a,b)
{
	console.log(a+b);
}

add(5,2);








//passsing function to another function
function callFunc(func)
{
	func();
}

function sayHI(){
	console.log("Hiiii");
}

callFunc(sayHI);
