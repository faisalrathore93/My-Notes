//we can create custome events and add them to the objects.

var events = require('events');
var util = require('util');


//creating a constructor

person = function(name){
	this.name=name;
}


//letting person objects inherit the EventEmitter
util.inherits(person,events.EventEmitter);


//creating two objects
var imran = new person('imran');
var faizan = new person('imran');

//creating an array of those objects
var people = ['imran','faizan'];

//for each object add an on.speak 
people.forEach(function(person){
	person.on('speak',function(msg){
		console.log(person.name +' said '+msg);
	});
});

//emiting the event
imran.emit('speak','hey dudes');
