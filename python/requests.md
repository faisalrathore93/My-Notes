## Python Requests

__Get Request__
```python
import requests

r=requests.get('http://192.168.64.2/python/file.txt');
print(r);
```




__Help and Dir for Response Object__(This will list all the method supported by the object)
```python
import requests

r=requests.get('http://192.168.64.2/python/file.txt');
print(help(r));
print(dir(r));
```

__Response in bytes__
```python
import requests

r=requests.get('http://192.168.64.2/python/file.txt');
print(r.content);
```

Output:

```console
b'i am a text file\nasdasd\nasdasd\nasdas \n'

```



__Is redirect__
```python
import requests

r=requests.get('http://192.168.64.2/python/file.txt');
print(r.is_redirect);
```

Output:

```console
False

```



__status_code is less than 400__
```python
import requests

r=requests.get('http://192.168.64.2/python/file.php');
print(r.ok);
```

Output:

```console
True

```



__Response in Text__
```python
import requests

r=requests.get('http://192.168.64.2/python/file.php');
print(r.text);
```

Output:

```console
[
{"target":"http://links.typeform.tf","http_status":403,"request_config":{"headers":{"User-Agent":"WhatWeb/0.5.1"}},"plugins":{"Title":{"string":["403 Forbidden"]},"IP":{"string":["23.21.234.98"]},"Country":{"string":["UNITED STATES"],"module":["US"]},"nginx":{},"HTTPServer":{"string":["nginx"]}}}
]
```








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
print(r.is_redirect);

```


__Response in Text__
```python
print(r.text);

```
