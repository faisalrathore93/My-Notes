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
print(json_data,indent=2)                   // When printing to screen


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```

____
```python


```
