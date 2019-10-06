#### Inspiration
https://www.geekboy.ninja/blog/airbnb-bug-bounty-turning-self-xss-into-good-xss-2/


#### Creating New Element:

```
x = document.createElement('input');
y= document.createElement('input');
z= document.createElement('button');

```
### Setting Attributes to them:

```
x.setAttribute('id',1);
y.setAttribute('id',2);
z.setAttribute('id',3);
```
```
x.setAttribute('value',"Enter email");
y.setAttribute('value',"Password");
z.setAttribute('value',"Submit");
z.innerHTML="Submit";
```


### Appending them to parent node:
```
document.body.appendChild(x);
document.body.appendChild(y);
document.body.appendChild(z);
```

```
document.body.appendChild(x);
document.body.appendChild(y);
document.body.appendChild(z);
```
https://www.geekboy.ninja/blog/airbnb-bug-bounty-turning-self-xss-into-good-xss-2/
#### parsing an Javascript array
Let suppose we have an array of 3 elements
```
var arr=['input','input','button'];

for (x in arr){
    alert(arr[x]);
}

```


####  Creating New Iframes and Sending Requests

On Executing the `document.body.appendChild(x)` in the document the http request to src will be made.
```
x=document.createElement('iframe')
x.setAttribute('src','http://localhost/3.html');
document.body.appendChild(x)
```https://www.geekboy.ninja/blog/airbnb-bug-bounty-turning-self-xss-into-good-xss-2/

#### Loading the iframes and Reading data from them

```
x=document.createElement('iframe')
x.setAttribute('src','http://127.0.0.1/3.html');
x.setAttribute('id','zz');
document.body.appendChild(x)
document.getElementById('zz').onload =  function (){
a=document.getElementById('zz').contentWindow.document.body.innerHTML;
}
a
```

Now here we can get the contents of the Loaded iframe into the variable and extract the token from it.


