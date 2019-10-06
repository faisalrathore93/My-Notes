Global Object is like window object in javascript used in browsers.
Global is a top level scope object.


Example:
=======

setTimeout(function imran(){
console.log("Hello world");},3000)

will wait 3 seconds and then execute imran function




Example2:
=========

var time=0;
setInterval(function imran2(){
time=time+2;
console.log(time +"hello world");},2000)


execute imran2() every 2 seconds
2 hello world
4 hello world
6 hello world
8 hello world


Example3:
=========
time=0;
var intt=setInterval(function imran(){
time=time+2;
if(time>5)
{
clearInterval(intt);
}
console.log(time+" hello world");},2000);



Executes time+ hello world to console after every 2 seconds till time is not greater than 5

