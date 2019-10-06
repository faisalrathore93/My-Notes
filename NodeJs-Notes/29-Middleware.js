So the First Question is what is an middleware. The middle ware is basically an function which does some crazy stuffs to the 
req or res object before sending the actual response.

Example:
--------

function logger(req,res,next)
{
console.log(new Date(),req.method,req.url);
next();
}
app.user(logger);
app.listen(3000);

This is an basic example of an middleware. in this code we are creating an function called logger which logs the req method
and the req url in the console and then sends the req object to the next url handler below logger function.



Example2:
---------

function logger(req,res,next)
{
console.log(new Date(),req.method,req.url);
next();
}

function sendHello(req,res,next)
{
res.send('Hello');
next();
}

app.use(logger);
app.get('/',sendHello);
app.listen(3000);

In this code we are creating an two middlewares logger() and the sendHello() and as you can see we are using the logger on
every request but we are calling the sendHello on only when requests are made to '/'.
so with the piece of code we have both the things a logger and a response.

But the only problem in this case is that the response send to users browser never end's because we are not using res.end() 
anywhere in the code.


Example3
--------

function logger(req,res,next)
{
console.log(new Date(),req.method,req.url);
next();
}

function sendHello(req,res,next)
{
res.send('Hello');
next();
}

function Bye(req,res,next)
{
res.send('Bye");
res.end();
}
app.use(logger);
app.get('/',sendHello,Bye);
app.listen(3000);


In this code the function logger() will log the info and passes the req to the app.get('/') handeler which will call the 
sendHello() which will call the sendHello To the client but will not end up the response. again the app.get('/') router will
call teh Bye() which will send bye and close the connection to the server.

