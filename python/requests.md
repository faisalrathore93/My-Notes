## Python Requests

### Get request

```python
import requests

r=requests.get('http://192.168.64.2/python/file.txt');
print(r);
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
print(r.ok);
```


__Response in Text__
```python
print(r.text);

```
