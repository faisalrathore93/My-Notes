## Json


__Json to Python Conversions__

| Json| Python|   
|---|---|
| Object  | dict  |
|  Array | List  |
|  string | str  |
| Number (int)  | int  |
| Number (real)  | float  |
|  true | True  |
|  false | False  |
|  null | None  |




__Json String to Python Object__
> Json is an Dict Type
```python
json_data=json.loads(string_data)
print(type(json_data))
```




__Python Object to Json String__
```python
json_data=json.loads(string_data)
print(json_data['batters']['batter'][1])
print(type(json_data))                        //<class 'dict'>


string_data2=json.dumps(json_data)
print(type(string_data2))                       //<class 'str'>

```



__Beautifying json__
```python
json.dump(top, fh2,indent=2)                 // When Writing to Files
```

__API to File__
```python
import json
import requests

url='https://crt.sh/?q=%.typeform.tf&output=json'

resp=requests.get(url)
json_data=resp.json()
print(json_data)
print(type(json_data))
domains=''
for domain in json_data:
	domains=domains+domain['name_value']+'\n'

with open('subdomains.txt','w') as fh:
	fh.write(domains)

```
