# Python Requests

## General method

```python
import requests

r=requests.<GET|POST|PUT|DELETE|TRACE>('url');
print(r);
```

## Get request

```python
import requests

r=requests.get('http://192.168.64.2/python/file.txt');
print(r);
```



## POST request

```python
import requests
parameters={"name":"imran","age":"21"}
r=requests.POST('http://192.168.64.2/python/file.txt');
print(r);
```



## Get/POST parameters
```python
import requests


parameters={"name":"imran","age":"21"}
r=requests.get("https://raw.githubusercontent.com/imran-parray/My-Notes/master/ssh.md",params=parameters);
print(r.url)
```


## Response Object Method

__Response in Bytes__
```python
print(r.content);
```


__Help and Dir for Response Object__
This will list all the method supported by the object
```python
print(help(r));
print(dir(r));
```


__is redirect__
```python
print(r.is_redirect);
```

__status_code is less than 400__
```python
print(r.ok);
```


__Response in Text__
```python
print(r.text);
```

__Status Code__
```python
print(r.status_code)       //status code  200
print(r.reason)            //status reason  OK
```

__Response Headers in Json__
```python
print(r.headers)
```



__Know Request URL__
```python
print(r.url)
```


__Close the Connection__
```python
print(r.close)
```


__Returns Cookie Object__
```python
print(r.cookies)
```


__Parsing Json response__
```python
s=r.json()
print(s['target'])
```


__Basic Auth__
```python
r=requests.get("https://google.com/file.json",auth=("username","password"));

```


__timeout Request__
```python
r=requests.get("https://google.com/file.json",timeout=3);

```


____
```python

```
