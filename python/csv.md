## csv (comma Seperated values)

> You can use any delimited 

__Reading an CSV File__
```python

import csv

with open('data.csv','r') as f:
	data=csv.reader(f)
	for line in data:
		print(line)
```



__Printing Columns__
```python
import csv

with open('data.csv','r') as f:
	data=csv.reader(f)
	for line in data:
		print(line[1],line[2])
```

__Extracting columns to other file__
```python
import csv

with open('data.csv','r') as f:
	with open('emails.txt','w') as emailsf:
		data=csv.reader(f)
		for line in data:
			emailsf.write(line[1])
			emailsf.write('\n')

```


__Skipping Headers using next()__
> Next skips one itteration 
```python
import csv

with open('data.csv','r') as f:
	data=csv.reader(f)
	next(f)
	for line in data:
		print(line[1],line[2])
```



__Reading 1.csv to 2.csv__(example)
```python
import csv

with open('data.csv','r') as f:                     #Opening Data file
	data=csv.reader(f)                                #Putting the contents of data.csv in data varable
	next(f)                                           #skip headers
	with open('email.csv','w') as f2:                 #Opening New File
		fileh=csv.writer(f2,delimiter='~')              #Creating New csv writable object with delimiter ~
		for line in data:                               #for each line in data.csv
			fileh.writerow(line)                          #write rows in email.csv
```

## Using DictReader

__Using DictReader for Reading__
```python
import csv

with open('data.csv','r') as f:
	data=csv.DictReader(f)
	for line in data:
		print(line)

```



__Accessing Specific Columns__
```python
import csv

with open('data.csv','r') as f:
	data=csv.DictReader(f)
	for line in data:
		print(line['name'])

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




