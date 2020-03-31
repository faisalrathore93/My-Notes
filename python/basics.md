# Python Notes
Hands On Notes Created By Imran Parray

### Using end in print
```
print("hello")
print("hi")

hello
hi

Example 2:

print("hello",end=' ')
print("hi")

hello hi


```

### in operator
```
name='imran'
print("i" in name)

True
```

### Format String
```
age=12
print("Your age is "+str(age))
print("Your age is {0}".format(age))

Your age is 12
Your age is 12
```

### String Specifiers
```
age=12
print("My age is %d" %age)

My age is 12



Example 2:

age=12
homeno=1121
cellno=1131
print("Your age is "+str(age))
print("Your age is {0}, your home Number is {1} and your cell no is {2}".format(age,homeno,cellno))


Your age is 12
Your age is 12, your home Number is 1121 and your cell no is 1131
[Finished in 0.0s]


```


### %d %2d %3d %4d ...
```
%d 	-	 One locations
%2d	-	Two locations
%3d	-	Three Locations
```

Example:

```
for i in range(1,10):
	print("No %2d multiplied by %2d is %4d" %(i , i , i*i))

No  1 multiplied by  1 is    1
No  2 multiplied by  2 is    4
No  3 multiplied by  3 is    9
No  4 multiplied by  4 is   16
No  5 multiplied by  5 is   25
No  6 multiplied by  6 is   36
No  7 multiplied by  7 is   49
No  8 multiplied by  8 is   64
No  9 multiplied by  9 is   81
[Finished in 0.0s]
```


### for in loop
```
name="i can code in python"
for i in range(0, len(name)):
	print(name[i])

i
 
c
a
n
 
c
o
d
e
 
i
n
 
p
y
t
h
o
n
```

#### Parsing string 
```
name="1,2,3,4,5,6,7,8,9"
for i in range(0, len(name)):
	if name[i] in "123456789":
		print(name[i])

1
2
3
4
5
6
7
8
9
[Finished in 0.0s]

```


### Parsing string using char
```
name="Hello world"
for char in name:
	print(char)


H
e
l
l
o
 
w
o
r
l
d
[Finished in 0.0s]
```

### for loop
```
for i in range(1,5):
	print(i)

1
2
3
4	

```

### Jum in for loop
```
for i in range(0,50,5):
	print(i)


0
5
10
15
20
25
30
35
40
45
[Finished in 0.0s]
```

## Lists

### Lists and String
```
x=list("I code python")
print(x)

Output:
------

['I', ' ', 'c', 'o', 'd', 'e', ' ', 'p', 'y', 't', 'h', 'o', 'n']
```


### Sorting list
```
a=[3,2,3,4]

print(sorted(a))

Output:
------

[2, 3, 3, 4]
```


### Sorting List in Revrse
```
a=[3,2,3,4]

print(sorted(a,reverse=True))

Output:
------

[4, 3, 3, 2]
```

### Filling Lists with Range Function
```
lst=list(range(10))
print(lst)

Output:
------

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```



### Lists inside Lists
```
a=[]
a.append([1,2])
a.append([3,4])
a.append([5,6])
a.append([7,8])

for b in a:
	print(b)
	for c in b:
		print(c)

Output:
------

[1, 2]
1
2
[3, 4]
3
4
[5, 6]
5
6
[7, 8]
7
8
```


## Printing Everythin in reverse
```
stg="Imran"
print(stg[::-1])

print("="*50)

for i in range(100,0,-1):
    print(i)

print("="*50)

list=['aaa','bbb','ccc']
print(list[::-1])
```

## iterators

```
names=['imran','nazir','parray']

iterator=iter(names)
print(iterator)
print(next(iterator))
print(next(iterator))
print(next(iterator))


Output:
------

<list_iterator object at 0x7f1597c6a470>
imran  
nazir
parray
```


### parsing list
```
names=['imran','mubashir','zubair','nazir']
for name in names:
	print(name)

Output:
------

imran
mubashir
zubair
nazir

```

### Skipping Elements
```

names=['imran','parray','mubashir','parray','zubair','parray','nazir']
for name in names:
	if name=='parray':
		continue
	
	print(name)

Output:
------

imran
mubashir
zubair
nazir

```


### Exercise [ Check if IP is valid ]
```
ip=input("Enter the Ip Address:")
sip=ip.split(".")
invalid=0
if len(sip)<4 or len(sip)>4:
	print("invalid IP")
else:
	for seg in sip:
		if seg=='' or seg==' ':
			invalid=1
			print("Invalid IP")
			break;

	if(invalid==0):
		print("Ip has %s Segments" %len(sip))

```



### Accessing Tuple
```
a=('a','b','c')
print(a[0])
print(a[1])
print(a[2])

Output:
------
abc
```


## Tuples

```
a=('a','b','c')
print(a)

Output
------
('a', 'b', 'c')

```




### Updating a tuple
```
a=('a','b','c')
print(a)
a=(a[0],'xx',a[2])
print(a)

Output
------

('a', 'b', 'c')('a', 'xx', 'c')
```



### Unpacking the tuple
```
a=('111','222','333')
b,c,d=a
print(b)
print(c)
print(d)

Output
------
111222333
```









### Tuples inside Tuple

```
a=('111','222','333',('444','555'),('666','777'))
b,c,d,e,f=a
print(b)
print(c)
print(d)
print(e)
print(f)

g,h=e
i,j=f
print(g)
print(h)
print(i)
print(j)

Output:
--------

111
222
333
('444', '555')
('666', '777')
444
555
666
777
```


## Loops

### While loop
```
x=10
while x>0:
	print(x)
	x=x-1

Output:
------

10
9
8
7
6
5
4
3
2
1


```
### While loop Example
```
a=["1","2","3","4","5","6"]
while True:
	x=input("Enter Your Number")
	if x not in a:
		if x=="quit":
			print("Good Bye !")
			break;
		print("Ticket Not Found !")
		print("Try Again:\n")
		continue
	else:
		print("Welcome "+x)
		break

```


### While Loop Guess Game
```


```


## Dictionary

### Printing Elements:

```
fruits = {
    "Juice":"$50",
    "Soap":"$30",
    "veg":"$10",
    "chicken":"$100"
}
print(fruits['Soap'])


Output
------

$30
```

### Dict
```
fruits = {
    "Juice":"$50",
    "Soap":"$30",
    "veg":"$10",
    "chicken":"$100"
}

#Wrong Way
print(fruits('veg'))

#Right Way
print(fruits.get['veg'])


Output:
---------
$10
```

### Parsing the Dict
```
fruits = {
    "Juice":"$50",
    "Soap":"$30",
    "veg":"$10",
    "chicken":"$100"
}

for a in fruits:
    print(a)

while True:
    x=input("Enter The Item: ")
    if x == 'quit':
        break
    else:
        if x not in fruits:
            pass
        else:
            print(fruits[x])
            continue



Output
------

Juice
Soap
veg
chicken
Enter The Item: Soap
$30
Enter The Item: veg
$10
Enter The Item: nonsaasdasd
Enter The Item: 
Enter The Item: quit
```

### Using .get method is Dictionaries
```
fruits = {
    "Juice":"$50",
    "Soap":"$30",
    "veg":"$10",
    "chicken":"$100"
}

for a in fruits:
    print(a)

while True:
    x=input("Enter The Item: ")
    if x == 'quit':
        break
    else:
        print(fruits.get(x,"We Dont have %s here" %x))


Output
------

Juice
Soap
veg
chicken
Enter The Item: veg
$10
Enter The Item: chicken
$100
Enter The Item: lalalala
We Dont have lalalala here
Enter The Item: lolololo
We Dont have lolololo here
Enter The Item:  
```

### Extracting keys from Dict
```
fruits = {
    "Juice":"$50",
    "Soap":"$30",
    "veg":"$10",
    "chicken":"$100"
}
print(fruits.keys())

for a in fruits.keys():
    print(a)


Output
------

dict_keys(['Juice', 'Soap', 'veg', 'chicken'])
Juice
Soap
veg
chicken
```

### Dictionaries to Lists
```
fruits = {
    "Juice":"$50",
    "Soap":"$30",
    "veg":"$10",
    "chicken":"$100"
}
a=list(fruits.values())
print(a)


Output
------

['$50', '$30', '$10', '$100']
```



### Dictionaries to Tuples
```
fruits = {
    "Juice":"$50",
    "Soap":"$30",
    "veg":"$10",
    "chicken":"$100"
}
a=list(fruits.items())
print(a)


Output
------

[('Juice', '$50'), ('Soap', '$30'), ('veg', '$10'), ('chicken', '$100')]
```


### Tuple to Dict
```
fruits = {
    "Juice":"$50",
    "Soap":"$30",
    "veg":"$10",
    "chicken":"$100"
}

clothes = (
    ("Pant","30"),
    ("shirt","20"),
    ("tshirt","50")
)

print(dict(clothes))


Output
------

{'Pant': '30', 'shirt': '20', 'tshirt': '50'}
```

### Using Join Method
```
a='1234'
print("a".join(a))


Output
------

1a2a3a4
```

### Update Dict
```
places ={
    "hill":"You are at the school",
    "home":"You are home",
    "bank":"You are at the bank",
    "school":"You are at the school"
}

codes ={
    "1":"hill",
    "2":"school",
    "3":"bank",
    "4":"home",
}


places.update(codes)
print(places)



Output
------

{'hill': 'You are at the school', 'home': 'You are home', 'bank': 'You are at the bank', 'school': 'You are at the school', '1': 'hill', '2': 'school', '3': 'bank', '4': 'home'}
```




### Combining two Dictionaries
```
places ={
    "hill":"You are at the school",
    "home":"You are home",
    "bank":"You are at the bank",
    "school":"You are at the school"
}

codes ={
    "1":"hill",
    "2":"school",
    "3":"bank",
    "4":"home",
}


places_codes=places.copy()
places_codes.update(codes)

print(places_codes)



Output
------

{'hill': 'You are at the school', 'home': 'You are home', 'bank': 'You are at the bank', 'school': 'You are at the school', '1': 'hill', '2': 'school', '3': 'bank', '4': 'home'}
```




### Numbring Dicts
```
places={
0:{"name":"sopore","code":"111"},
1:{"name":"baramulla","code":"222"},
2:{"name":"watergam","code":"333"},
}


for a in places:
    print(a)


Output
------

0
1
2
```


### Multilevel Dicts
```
places={
0:{"name":"sopore","code":"111"},
1:{"name":"baramulla","code":"222"},
2:{"name":"watergam","code":"333"},
}


for a in places:
    print(places[a])


Output
------

{'name': 'sopore', 'code': '111'}
{'name': 'baramulla', 'code': '222'}
{'name': 'watergam', 'code': '333'}
```



## Sets

### Making | Accessing Set
```
places={"jummu","kashmir","sopore"}

for place in places:
    print(place)

print('-'*80)

lst=["jummu","kashmir","sopore"]
print(type(lst))
print(lst)

print('-'*80)

print(set(lst))
print(type(set(lst)))


Output
------

sopore
kashmir
jummu
--------------------------------------------------------------------------------
<class 'list'>
['jummu', 'kashmir', 'sopore']
--------------------------------------------------------------------------------
{'sopore', 'kashmir', 'jummu'}
<class 'set'>
```




### Converting Other data types to Set using Set Functions
```
lst=["jummu","kashmir","sopore"]
print(type(lst))
print(lst)

print('-'*80)

print(set(lst))
print(type(set(lst)))


Output
------

<class 'list'>
['jummu', 'kashmir', 'sopore']
--------------------------------------------------------------------------------
{'sopore', 'kashmir', 'jummu'}
<class 'set'>
```




### Adding New Elements
```
places={"jummu","kashmir","sopore"}
places.add("hell")
for place in places:
    print(place)




Output
------

sopore
hell
jummu
kashmir
```







### Union and Intersection
```
no1={'1','2','3'}
no2={'2','5','7'}

print(no1.union(no2))
print(no1.intersection(no2))



Output
------

{'5', '3', '2', '1', '7'}
{'2'}
```




## Files
### Reading a file
```
The key function for working with files in Python is the open() function.

The open() function takes two parameters; filename, and mode.

There are four different methods (modes) for opening a file:

"r" - Read - Default value. Opens a file for reading, error if the file does not exist

"a" - Append - Opens a file for appending, creates the file if it does not exist

"w" - Write - Opens a file for writing, creates the file if it does not exist

"x" - Create - Creates the specified file, returns an error if the file exists

In addition you can specify if the file should be handled as binary or text mode

"t" - Text - Default value. Text mode

"b" - Binary - Binary mode (e.g. images)

```
### Rading A File
```
file = open('file.txt')

for line in file:
    print(line)


Output
------

This is a demo file

and i am the content of this file.txt

```



### Using Functions on Line Data
```
Example we are using lower() function here in the same manner we can use other function on each line

file = open('file.txt')

for line in file:
    print(line.lower())


Output
------

this is a demo file

and i am the content of this file.txt

```

### Using Function on line data 2
```
file = open('file.txt')

for line in file:
    print(line.split(' '))


Output
------

['This', 'is', 'a', 'demo', 'file\n']
['and', 'i', 'am', 'the', 'content', 'of', 'this', 'file.txt\n']
```



### Using With Method to open files
```
with open("file.txt",'r') as fh:
    for line in fh:
        print(line)



Output
------

This is a demo file

and i am its content
```





### Writing to File
```
s="I am learning Python"
with open("file.txt",'w') as fh:
    print(s[::-1],file=fh)


Output
------

```




### Saving Table of 1-10 into file
```
with open('file.txt','w') as fh:
    for i in range(10):
        for j in range(1,10):
            print("%d x %d = %d" %(i,j,i*j),file=fh)
        print('-'*10,file=fh)
```


### Writing file with open method
```
fh=open('file.txt','w')
for i in range(10):
    for j in range(1,10):
        print("%d x %d = %d" %(i,j,i*j),file=fh)
    print('-'*10,file=fh)
```



## Reading | Writing Binary Files
```
with open("file.txt",'bw') as fh:
    for i in range(10):
        fh.write(bytes(i))


with open("file.txt",'br') as fh:
    for line in fh:
        print(line)



Output
------

b'\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00'
```



### Serializing an object in file
```
import pickle

person = {
    "name":"imran",
    "age":"22",
    "color":"white"
}

with open('file.txt','wb') as bf:
    pickle.dump(person,bf)



Output
------

```


### De-Serializing an object from file
```
import pickle

with open("file.txt",'rb') as bf:
    unserialized = pickle.load(bf)
print(unserialized)


Output
------

{'name': 'imran', 'age': '22', 'color': 'white'}
```




# Packges 

### importing the whole package
```
import turtle

turtle.forward(120)
turtle.left(120)

```

### Importing Methods
```
from turtle import forward,left

forward(120)
left(120)
```

### Help function

```
It provides you the full documentation of an module or an command

import time

help(time)

```



## Web Browsers

### Open New Website
```
import webbrowser

webbrowser.open('http://localhost')
```

### Open custom browsers
```
import webbrowser

firefox = webbrowser.get('/opt/firefox/firefox %s').open("google.com")
```


## Functions


### Function with arguments
```
def add(a,b):
    x=a+b
    print(x)
add(2,3)


Output
------

5
```






### Many Arguments to a functions
```
def add(*args):
    x=0    
    for n in args:
        x=x+n
    print(x)
add(2,3,4,5,6)


Output
------

20
```










## GUI for python
```
import tkinter

print(tkinter.TkVersion)
tkinter._test()

```

### Making a new window
```
import tkinter

window= tkinter.Tk() # Creating New Windows
window.title("Hello") # Setting Title
window.mainloop() # Keeping it running in the loop
```


### Setting Size of an window
```
import tkinter

window.geometry('500x500') # Setting Size
window= tkinter.Tk() # Creating New Windows
window.title("Hello") # Setting Title
window.mainloop() # Keeping it running in the loop
```


==================================================================

# Python Numbers

```
There are three numeric types in Python:
	int
	float
	complex

	Variables of numeric types are created when you assign a value to them:

	Example
	x = 1    # int
	y = 2.8  # float
	z = 1j   # complex


	The type and class of variable can be found using method 'type()'

	 example:
	print(type(x))
	print(type(y))
	print(type(z))
	```
	
Python Casting
-----------------
```
	
	Specify a Variable Type:

	There may be times when you want to specify a type on to a variable. This can be done with casting. Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types.
	
	Casting in python is therefore done using constructor functions:
	
	int() - constructs an integer number from an integer literal, a float literal (by rounding down to the previous whole number), or a string literal (providing the string represents a whole number)
	float() - constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)
	str() - constructs a string from a wide variety of data types, including strings, integer literals and float literals
	Example
	Integers:
	
	x = int(1)   # x will be 1
	y = int(2.8) # y will be 2
	z = int("3") # z will be 3
	
	There is no inbuilt casting of python.
	```
	
Python Strings
---------------
	

__String Literals__:
```
	String literals in python are surrounded by either single quotation marks, or double quotation marks.
	
	'hello' is the same as "hello".
	
	Strings can be output to screen using the print function. For example: print("hello").
	
	Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters. However, Python does not have a character data type, a single character is simply a string with a length of 1. Square brackets can be used to access elements of the string.
```	
	Example
	Get the character at position 1 (remember that the first character has the position 0):
	```
	a = "Hello, World!"
	print(a[1])
	```
	


__Slicing:__
```
	Example
	Substring. Get the characters from position 2 to position 5 (not included):
	
	b = "Hello, World!"
	print(b[2:5])
```
__striping:__
	Example
	The strip() method removes any whitespace from the beginning or the end:
	```
	a = " Hello, World! "
	print(a.strip()) # returns "Hello, World!"
	```


__Finding Length:__

	Example
	The len() method returns the length of a string:
	```
	a = "Hello, World!"
	print(len(a))
	```

	__Lower and Upper methods__
	
	-Example
	The lower() method returns the string in lower case:
	```
	a = "Hello, World!"
	print(a.lower())
	```


	Example
	The upper() method returns the string in upper case:

	```
	a = "Hello, World!"
	print(a.upper())
	```


	__Replace method:__
	
	Example
	The replace() method replaces a string with another string:
	```
	a = "Hello, World!"
	print(a.replace("H", "J"))
	```

	__Split method:__
	
	Example
	The split() method splits the string into substrings if it finds instances of the separator:
	```
	a = "Hello, World!"
	print(a.split(",")) # returns ['Hello', ' World!']
	```
	
	
Python Collections (Arrays)
--------------------------
	There are four collection data types in the Python programming language:
	
__List:__ is a collection which is ordered and changeable. Allows duplicate members.
__Tuple:__ is a collection which is ordered and unchangeable. Allows duplicate members.
__Set:__ is a collection which is unordered and unindexed. No duplicate members.
__Dictionary:__ is a collection which is unordered, changeable and indexed. No duplicate members.
	When choosing a collection type, it is useful to understand the properties of that type. Choosing the right type for a particular data set could mean retention of meaning, and, it could mean an increase in efficiency or security.
	
__List,Tuple and Set__ 
	
	
__Empty Lists__
```
	empty-list = []
	empty-list = list()
```
__Empty Tuples__
```
	empty-tuple = ()
	empty-tuple = tuple()
```	
 __Empty Sets__
```	
empty-set = {} # This isn't right! It's a dict
empty-set = set()
```	
	
	
	
	
	
	## Lists

	A list is a collection which is ordered and changeable. In Python lists are written with square brackets.
	
	You access the list items by referring to the index number:
	
	Example
	Print the second item of the list:
	
	thislist = ["apple", "banana", "cherry"]
	print(thislist[1])
	
	
	__Method	Description__
	append()	Adds an element at the end of the list
	clear()	Removes all the elements from the list
	copy()	Returns a copy of the list
	count()	Returns the number of elements with the specified value
	extend()	Add the elements of a list (or any iterable), to the end of the current list
	index()	Returns the index of the first element with the specified value
	insert()	Adds an element at the specified position
	pop()	Removes the element at the specified position
	remove()	Removes the item with the specified value
	reverse()	Reverses the order of the list
	sort()	Sorts the list
	
	
	
	
	
	## Tuple

	A tuple is a collection which is ordered and unchangeable. In Python tuples are written with round brackets.
	Note: You cannot remove items in a tuple.
	Example
	Create a Tuple:
	
	thistuple = ("apple", "banana", "cherry")
	print(thistuple)
	Access Tuple Items
	You can access tuple items by referring to the index number:
	
	Example
	Return the item in position 1:
	
	thistuple = ("apple", "banana", "cherry")
	print(thistuple[1])
	
	
	__Tuple Methods__
	Python has two built-in methods that you can use on tuples.
	
	Method	Description
	count()	Returns the number of times a specified value occurs in a tuple
	index()	Searches the tuple for a specified value and returns the position of where it was found
	
	
	
	
	## Set
	A set is a collection which is unordered and unindexed. In Python sets are written with curly brackets.
	
	Example
	Create a Set:
	
	thisset = {"apple", "banana", "cherry"}
	print(thisset)
	Note: Sets are unordered, so the items will appear in a random order.
	
	Access Items
	You cannot access items in a set by referring to an index, since sets are unordered the items has no index.
	
	But you can loop through the set items using a for loop, or ask if a specified value is present in a set, by using the in keyword.
	
	Example
	Loop through the set, and print the values:
	
	thisset = {"apple", "banana", "cherry"}
	
	for x in thisset:
	  print(x)
	
	
	__Set Methods__
	Python has a set of built-in methods that you can use on sets.
	
	Method	Description
	add()	Adds an element to the set
	clear()	Removes all the elements from the set
	copy()	Returns a copy of the set
	difference()	Returns a set containing the difference between two or more sets
	difference-update()	Removes the items in this set that are also included in another, specified set
	discard()	Remove the specified item
	intersection()	Returns a set, that is the intersection of two other sets
	intersection-update()	Removes the items in this set that are not present in other, specified set(s)
	isdisjoint()	Returns whether two sets have a intersection or not
	issubset()	Returns whether another set contains this set or not
	issuperset()	Returns whether this set contains another set or not
	pop()	Removes an element from the set
	remove()	Removes the specified element
	symmetric-difference()	Returns a set with the symmetric differences of two sets
	symmetric-difference-update()	inserts the symmetric differences from this set and another
	union()	Return a set containing the union of sets
	update()	Update the set with the union of this set and others
	
	
	
	
	
	
	
	
	
	###EXAMPLE CODE SNIPPETS:
	
__Mutable__
	list-1 = ['History', 'Math', 'Physics', 'CompSci']
	list-2 = list-1
	
	print(list-1)
	print(list-2)
	
 list-1[0] = 'Art'
	
 print(list-1)
 print(list-2)
	
	
 __Immutable__
 tuple-1 = ('History', 'Math', 'Physics', 'CompSci')
 tuple-2 = tuple-1
	
 print(tuple-1)
 print(tuple-2)
	
 tuple-1[0] = 'Art'
	
 print(tuple-1)
 print(tuple-2)
	
 __Sets__
	cs-courses = {'History', 'Math', 'Physics', 'CompSci'}
	
	print(cs-courses)
	
	
 __Empty Lists__
	empty-list = []
	empty-list = list()
	
 __Empty Tuples__
	empty-tuple = ()
	empty-tuple = tuple()
	
 __Empty Sets__
	empty-set = {} # This isn't right! It's a dict
	empty-set = set()
	
	
	
	
	
	
## Python Dictionaries

	
	
	__Dictionary__
	A dictionary is a collection which is unordered, changeable and indexed. In Python dictionaries are written with curly brackets, and they have keys and values.
	
	Example
	Create and print a dictionary:
	
	thisdict =	{
	  "brand": "Ford",
	  "model": "Mustang",
	  "year": 1964
	}
	print(thisdict)
	Accessing Items
	You can access the items of a dictionary by referring to its key name:
	
	Example
	Get the value of the "model" key:
	
	x = thisdict["model"]
	There is also a method called get() that will give you the same result:
	
	Example
	Get the value of the "model" key:
	
	x = thisdict.get("model")
	
	
	
	^^EXAMPLE CODE SNIPPET:
	student = {'name': 'John', 'age': 25, 'courses': ['Math', 'CompSci']}
	
	for key, value in student.items():
	    print(key, value)
	
	
	
	
	__Dictionary Methods__
	Python has a set of built-in methods that you can use on dictionaries.
	
	Method	Description
	clear()	Removes all the elements from the dictionary
	copy()	Returns a copy of the dictionary
	fromkeys()	Returns a dictionary with the specified keys and values
	get()	Returns the value of the specified key
	items()	Returns a list containing the a tuple for each key value pair
	keys()	Returns a list contianing the dictionary's keys
	pop()	Removes the element with the specified key
	popitem()	Removes the last inserted key-value pair
	setdefault()	Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
	update()	Updates the dictionary with the specified key-value pairs
	values()	Returns a list of all the values in the dictionary
	
	
	
	
	
Python Conditions and If statements
--------------------------------
	
	
	
	
	Python supports the usual logical conditions from mathematics:
	
	Equals: a == b
	Not Equals: a != b
	Less than: a < b
	Less than or equal to: a <= b
	Greater than: a > b
	Greater than or equal to: a >= b
	These conditions can be used in several ways, most commonly in "if statements" and loops.
	
	*An "if statement" is written by using the if keyword.
	
	Example
	If statement:
	
	a = 33
	b = 200
	if b > a:
	  print("b is greater than a")
	In this example we use two variables, a and b, which are used as part of the if statement to test whether b is greater than a. As a is 33, and b is 200, we know that 200 is greater than 33, and so we print to screen that "b is greater than a".
	
	
	*Elif:
	
	The elif keyword is pythons way of saying "if the previous conditions were not true, then try this condition".
	
	Example
	a = 33
	b = 33
	if b > a:
	  print("b is greater than a")
	elif a == b:
	  print("a and b are equal")
	In this example a is equal to b, so the first condition is not true, but the elif condition is true, so we print to screen that "a and b are equal".
	
	*Else:
	
	The else keyword catches anything which isn't caught by the preceding conditions.
	
	Example
	a = 200
	b = 33
	if b > a:
	  print("b is greater than a")
	elif a == b:
	  print("a and b are equal")
	else:
	  print("a is greater than b")
	In this example a is greater to b, so the first condition is not true, also the elif condition is not true, so we go to the else condition and print to screen that "a is greater than b".
	
	You can also have an else without the elif:
	
	Example
	a = 200
	b = 33
	if b > a:
	  print("b is greater than a")
	else:
	  print("b is not greater than a")
	
	
	**Short Hand If
	If you have only one statement to execute, you can put it on the same line as the if statement.
	
	Example
	
	
	**One line if statement:
	
	if a > b: print("a is greater than b")
	
	
	**Short Hand If ... Else
	If you have only one statement to execute, one for if, and one for else, you can put it all on the same line:
	
	Example
	One line if else statement:
	
	print("A") if a > b else print("B")
	
	You can also have multiple else statements on the same line:
	
	Example
	One line if else statement, with 3 conditions:
	
	print("A") if a > b else print("=") if a == b else print("B")
	
	
	**And
	The and keyword is a logical operator, and is used to combine conditional statements:
	
	Example
	Test if a is greater than b, AND if c is greater than a:
	
	if a > b and c > a:
	  print("Both conditions are True")
	
	
	**Or
	The or keyword is a logical operator, and is used to combine conditional statements:
	
	Example
	Test if a is greater than b, OR if a is greater than c:
	
	if a > b or a > c:
	  print("At least one of the conditions are True")
	
	
	
	
	
Python Loops
--------
	
	
	Python has two primitive loop commands:
	
	**while loops
	**for loops
	
	*The while Loop:
	
	With the while loop we can execute a set of statements as long as a condition is true.
	
	Example
	Print i as long as i is less than 6:
	
	i = 1
	while i < 6:
	  print(i)
	  i += 1
	
	
	
	*Python For Loops:
	
	A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
	
	This is less like the for keyword in other programming language, and works more like an iterator method as found in other object-orientated programming languages.
	
	With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.
	
	Example
	Print each fruit in a fruit list:
	
	fruits = ["apple", "banana", "cherry"]
	for x in fruits:
	  print(x)
	
	--The for loop does not require an indexing variable to set beforehand.
	
	
	
	
	
Python Functions:
------------
	
	
	A function is a block of code which only runs when it is called.
	
	You can pass data, known as parameters, into a function.
	
	A function can return data as a result.
	
	**Creating a Function
	In Python a function is defined using the def keyword:
	
	Example
	def my-function():
	  print("Hello from a function")
	**Calling a Function
	To call a function, use the function name followed by parenthesis:
	
	Example
	def my-function():
	  print("Hello from a function")
	
	my-function()
	
	
	
	
	
	
	
	
	
	
Python Lambda
----------
	A lambda function is a small anonymous function.
	
	A lambda function can take any number of arguments, but can only have one expression.
	
	Syntax
		lambda arguments : expression
	The expression is executed and the result is returned:
	
	Example
	A lambda function that adds 10 to the number passed in as an argument, and print the result:
	
	x = lambda a : a + 10
	print(x(5))
	Lambda functions can take any number of arguments:
	
	Example
	A lambda function that multiplies argument a with argument b and print the result:
	
	x = lambda a, b : a * b
	print(x(5, 6))
	Example
	A lambda function that sums argument a, b, and c and print the result:
	
	x = lambda a, b, c : a + b + c
	print(x(5, 6, 2))
	 
	**Why Use Lambda Functions?
	
	The power of lambda is better shown when you use them as an anonymous function inside another function.
	
	Say you have a function definition that takes one argument, and that argument will be multiplied with an unknown number:
	
	def myfunc(n):
	  return lambda a : a * n
	Use that function definition to make a function that always doubles the number you send in:
	
	Example
	def myfunc(n):
	  return lambda a : a * n
	
	mydoubler = myfunc(2)
	
	print(mydoubler(11))
	Or, use the same function definition to make a function that always triples the number you send in:
	
	Example
	def myfunc(n):
	  return lambda a : a * n
	
	mytripler = myfunc(3)
	
	print(mytripler(11))
	Or, use the same function definition to make both functions, in the same program:
	
	Example
	def myfunc(n):
	  return lambda a : a * n
	
	mydoubler = myfunc(2)
	mytripler = myfunc(3)
	
	print(mydoubler(11)) 
	print(mytripler(11))
	
	
	
	
Arrays in Python
-----------
	
	
	Arrays and lists are both used in Python to store data, but they don't serve exactly the same purposes. They both can be used to store any data type (real numbers, strings, etc), and they both can be indexed and iterated through, but the similarities between the two don't go much further. The main difference between a list and an array is the functions that you can perform to them. For example, you can divide an array by 3, and each number in the array will be divided by 3 and the result will be printed if you request it. If you try to divide a list by 3, Python will tell you that it can't be done, and an error will be thrown.
	
	A list is a different kind of data structure from an array. The biggest difference is in the idea of direct access Vs sequential access. Arrays allow both; direct and sequential access, while lists allow only sequential access. And this is because the way that these data structures are stored in memory.
	
	
	Arrays are used to store multiple values in one single variable:
	
	Example
	Create an array containing car names:
	
	cars = ["Ford", "Volvo", "BMW"]
	What is an Array?
	An array is a special variable, which can hold more than one value at a time.
	
	If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
	
	car1 = "Ford";
	car2 = "Volvo";
	car3 = "BMW";
	However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
	
	The solution is an array!
	
	An array can hold many values under a single name, and you can access the values by referring to an index number.
	
	Access the Elements of an Array
	You refer to an array element by referring to the index number.
	
	Example
	Get the value of the first array item:
	
	x = cars[0]
	Example
	Modify the value of the first array item:
	
	cars[0] = "Toyota"
	The Length of an Array
	Use the len() method to return the length of an array (the number of elements in an array).
	
	Example
	Return the number of elements in the cars array:
	
	x = len(cars)
	Note: The length of an array is always one more than the highest array index.
	
	
	Looping Array Elements
	You can use the for in loop to loop through all the elements of an array.
	
	Example
	Print each item in the cars array:
	
	for x in cars:
	  print(x)
	Adding Array Elements
	You can use the append() method to add an element to an array.
	
	Example
	Add one more element to the cars array:
	
	cars.append("Honda")
	Removing Array Elements
	You can use the pop() method to remove an element from the array.
	
	Example
	Delete the second element of the cars array:
	
	cars.pop(1)
	You can also use the remove() method to remove an element from the array.
	
	Example
	Delete the element that has the value "Volvo":
	
	cars.remove("Volvo")
	Note: The remove() method only removes the first occurrence of the specified value.
	
	Array Methods
	Python has a set of built-in methods that you can use on lists/arrays.
	
	Method	Description
	append()	Adds an element at the end of the list
	clear()	Removes all the elements from the list
	copy()	Returns a copy of the list
	count()	Returns the number of elements with the specified value
	extend()	Add the elements of a list (or any iterable), to the end of the current list
	index()	Returns the index of the first element with the specified value
	insert()	Adds an element at the specified position
	pop()	Removes the element at the specified position
	remove()	Removes the first item with the specified value
	reverse()	Reverses the order of the list
	sort()	Sorts the list
	
	
	--Note: Python does not have built-in support for Arrays, but Python Lists can be used instead.
	
	
	
	
	
	
	
	
	
	
	
Python Classes
------------
	
	
	Almost everything in Python is an object, with its properties and methods.
	
	A Class is like an object constructor, or a "blueprint" for creating objects.
	
	*Create a Class:
	
	To create a class, use the keyword class:
	
	Example
	Create a class named MyClass, with a property named x:
	
	class MyClass:
	  x = 5
	Create Object
	Now we can use the class named myClass to create objects:
	
	Example
	Create an object named p1, and print the value of x:
	
	p1 = MyClass()
	print(p1.x)
	
	
	*The --init--() Function
	
	
	The examples above are classes and objects in their simplest form, and are not really useful in real life applications.
	
	To understand the meaning of classes we have to understand the built-in --init--() function.
	
	All classes have a function called --init--(), which is always executed when the class is being initiated.
	
	Use the --init--() function to assign values to object properties, or other operations that are necessary to do when the object is being created:
	
	Example
	Create a class named Person, use the --init--() function to assign values for name and age:
	
	class Person:
	  def --init--(self, name, age):
	    self.name = name
	    self.age = age
	
	p1 = Person("John", 36)
	
	print(p1.name)
	print(p1.age)
	Note: The --init--() function is called automatically every time the class is being used to create a new object.
	
	
	*Object Methods
	
	Objects can also contain methods. Methods in objects are functions that belongs to the object.
	
	Let us create a method in the Person class:
	
	Example
	Insert a function that prints a greeting, and execute it on the p1 object:
	
	class Person:
	  def --init--(self, name, age):
	    self.name = name
	    self.age = age
	
	  def myfunc(self):
	    print("Hello my name is " + self.name)
	
	p1 = Person("John", 36)
	p1.myfunc()
	Note: The self parameter is a reference to the class instance itself, and is used to access variables that belongs to the class.
	
	The self Parameter
	The self parameter is a reference to the class itself, and is used to access variables that belongs to the class.
	
	It does not have to be named self , you can call it whatever you like, but it has to be the first parameter of any function in the class:
	
	Example
	Use the words mysillyobject and abc instead of self:
	
	class Person:
	  def --init--(mysillyobject, name, age):
	    mysillyobject.name = name
	    mysillyobject.age = age
	
	  def myfunc(abc):
	    print("Hello my name is " + abc.name)
	
	p1 = Person("John", 36)
	p1.myfunc()
	Modify Object Properties
	You can modify properties on objects like this:
	
	Example
	Set the age of p1 to 40:
	
	p1.age = 40
	Delete Object Properties
	You can delete properties on objects by using the del keyword:
	
	Example
	Delete the age property from the p1 object:
	
	del p1.age
	Delete Objects
	You can delete objects by using the del keyword:
	
	Example
	Delete the p1 object:
	
	del p1
	
	^^Code snippets:
	https://github.com/CoreyMSchafer/code-snippets/tree/master/Object-Oriented
	
	
	
	
											File Handling
---------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	^^Code snippets:
	https://github.com/CoreyMSchafer/code-snippets/blob/master/Python-Files/Files.py
	
	
	
	File Handling
	The key function for working with files in Python is the open() function.
	
	The open() function takes two parameters; filename, and mode.
	
	There are four different methods (modes) for opening a file:
	
	"r" - Read - Default value. Opens a file for reading, error if the file does not exist
	
	"a" - Append - Opens a file for appending, creates the file if it does not exist
	
	"w" - Write - Opens a file for writing, creates the file if it does not exist
	
	"x" - Create - Creates the specified file, returns an error if the file exists
	
	In addition you can specify if the file should be handled as binary or text mode
	
	"t" - Text - Default value. Text mode
	
	"b" - Binary - Binary mode (e.g. images)
	
	Syntax
	To open a file for reading it is enough to specify the name of the file:
	
	f = open("demofile.txt")
	The code above is the same as:
	
	f = open("demofile.txt", "rt")
	Because "r" for read, and "t" for text are the default values, you do not need to specify them.
	
	Note: Make sure the file exists, or else you will get an error.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	***********Open a File on the Server*************
	
	
	Asume we have the following file, located in the same folder as Python:
	
	
	
	demofile.txt
	
	Hello! Welcome to demofile.txt
	This file is for testing purposes.
	Good Luck!
	To open the file, use the built-in open() function.
	
	
	
	
	The open() function returns a file object, which has a read() method for reading the content of the file:
	
	Example
	f = open("demofile.txt", "r")
	print(f.read())
	Read Only Parts of the File
	By default the read() method returns the whole text, but you can also specify how many character you want to return:
	
	Example
	Return the 5 first characters of the file:
	
	f = open("demofile.txt", "r")
	print(f.read(5))
	 
	Read Lines
	You can return one line by using the readline() method:
	
	Example
	Read one line of the file:
	
	f = open("demofile.txt", "r")
	print(f.readline())
	By calling readline() two times, you can read the two first lines:
	
	Example
	Read two lines of the file:
	
	f = open("demofile.txt", "r")
	print(f.readline())
	print(f.readline())
	By looping through the lines of the file, you can read the whole file, line by line:
	
	Example
	Loop through the file line by line:
	
	f = open("demofile.txt", "r")
	for x in f:
	  print(x)
	
	
	
	
	
	
	
	
	
	
	**********************************Python File Write**********************
	
	
	Write to an Existing File
	To write to an existing file, you must add a parameter to the open() function:
	
	"a" - Append - will append to the end of the file
	
	"w" - Write - will overwrite any existing content
	
	Example
	Open the file "demofile.txt" and append content to the file:
	
	f = open("demofile.txt", "a")
	f.write("Now the file has one more line!")
	Example
	Open the file "demofile.txt" and overwrite the content:
	
	f = open("demofile.txt", "w")
	f.write("Woops! I have deleted the content!")
	Note: the "w" method will overwrite the entire file.
	
	Create a New File
	To create a new file in Python, use the open() method, with one of the following parameters:
	
	"x" - Create - will create a file, returns an error if the file exist
	
	"a" - Append - will create a file if the specified file does not exist
	
	"w" - Write - will create a file if the specified file does not exist
	
	Example
	Create a file called "myfile.txt":
	
	f = open("myfile.txt", "x")
	Result: a new empty file is created!
	
	Example
	Create a new file if it does not exist:
	
	f = open("myfile.txt", "w")
	
	
	
	
	
	
	************************Python Delete File*****************
	
	
	
	Delete a File
	To delete a file, you must import the OS module, and run its os.remove() function:
	
	Example
	Remove the file "demofile.txt":
	
	import os
	os.remove("demofile.txt")
	Check if File exist:
	To avoid getting an error, you might want to check if the file exist before you try to delete it:
	
	Example
	Check if file exist, then delete it:
	
	import os
	if os.path.exists("demofile.txt"):
	  os.remove("demofile.txt")
	else:
	  print("The file does not exist")
	Delete Folder
	To delete an entire folder, use the os.rmdir() method:
	
	Example
	Remove the folder "myfolder":
	
	import os
	os.rmdir("myfolder")
	Note: You can only remove empty folders.
	
















