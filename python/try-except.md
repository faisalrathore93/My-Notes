## Try Except Block


__General Method__
```python
try:
  try_this_code()
except Exception:
  if_error_raise_an_excepton_here()
else:
  if_not_exception_do_this()
finally:
  alwasys_do_this() 
```


__Basic Usage__
```python 
try:
	with open('NonExist.txt') as fh:
		print(fh)
except:
	print("File not found")
```


__Catching paticular Exception__
```python

try:
	with open('file.txt') as fh:
		print(fh)
except FileNotFoundError:
	print("File not found")
```


__Using General Exception__

The FileNotFoundError Exception will only occure if file is missing but if any other exception occured like `x=nonExist` the more general Exception which is `except Exception:
` will occure. 
```python

try:
	with open('test.py') as fh:
		x=nonExist
		print(fh)
except FileNotFoundError:
	print("File not found")
except Exception:
	print("Some Exception Occured")
```

> TIP: Always put More specific Exceptions at top and general exception at end.


__Print General Exceptions__
```python

try:
	with open('tesxt.py') as fh:
		x=nonExist
		print(fh)
except FileNotFoundError as e:
	print(e)
except Exception as e:
	print(e)
```


__Else Block__
Else block only runs if there is no exception
```python
try:
 	fh=open('notes.md','r')
except FileNotFoundError:
	print("File Not Found")
else:
	for line in fh:
		print(line)
```


__Finally Block__
Runs Always
```python
try:
 	fh=open('notes.md','r')
except FileNotFoundError:
	print("File Not Found")
else:
	for line in fh:
		print(line)
finally:
	print("Always...")
```

> Tip: use Finally block to realease rosources and all 



## Raising Exceptions
__using raise__
```python
try:
 	fh=open('notes.md','r')
 	if fh.name!='noted.md':
 		raise FileNotFoundError
except FileNotFoundError:
	print("File Not Found")
else:
	for line in fh:
		print(line)
finally:
	print("Always...") 
```
