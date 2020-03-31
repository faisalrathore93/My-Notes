## Files


### Basics
The key function for working with files in Python is the `open()` function.

The open() function takes two parameters; `filename, and mode`.

There are four different methods (modes) for opening a file:

`"r" - Read` - Default value. Opens a file for reading, error if the file does not exist

`"a" - Append` - Opens a file for appending, creates the file if it does not exist

`"w" - Write` - Opens a file for writing, creates the file if it does not exist

`"x" - Create` - Creates the specified file, returns an error if the file exists

In addition you can specify if the file should be handled as binary or text mode

`"t" - Text` - Default value. Text mode

`"b" - Binary` - Binary mode (e.g. images)



__Reading a file__
```python
file = open('file.txt')

for line in file:
    print(line)

```


__Using Functions on Line Data__
> Example we are using lower() function here in the same manner we can use other function on each line

```python
file = open('file.txt')

for line in file:
    print(line.lower())
```


__With method__
```python
with open("file.txt",'r') as fh:
    for line in fh:
        print(line)

```


__File name__
```python
file = open('file.txt')
print(file.name)
file.close
```


__To check if the file is closed__
```python
file = open('file.txt')
print(file.name)
print(file.closed)
```


__Reading whole file__(form small files)
```python
with open("file.txt","r") as fh:
	content=fh.read()
	print(content)
```


__Reading Single Line__(It prints every new line each time its called)
```python

with open("file.txt","r") as fh:
	content=fh.readline()
	print(content) //line1
  	content=fh.readline()
	print(content) //line2
```


__Reading Big File__(It reads file line by line)
```python
with open("file.txt","r") as fh:
	for line in fh:
		print(line,end='')
```


__Read Specific Characters__
```python
with open("file.txt","r") as fh:
	content=fh.read(1000)             //Reads only first 1000 characters from file
	print(content)
   
  content=fh.read(1000)             //Reads only 2nd 1000 characters from file
	print(content)
  
```


____
```python

```


