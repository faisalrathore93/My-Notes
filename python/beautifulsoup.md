## Web Scraping Using beautiful Soup

__Pre Requirements__
```python
pip install requests
pip install beautifulsoup
pip install lxml
```


__Creating BeautifulSoup Object__
```python
from bs4 import BeautifulSoup
import requests

with open('subdomains.html','r') as f:
	soup = BeautifulSoup(f,'lxml')


print(soup)
```


__Prettyfy Response__
```python
print(soup.prettify())
```


__Scraping Tags__(will only match first tag)
```python
from bs4 import BeautifulSoup
import requests

with open('subdomains.html','r') as f:
	soup = BeautifulSoup(f,'lxml')


print(soup.title)                         //<title>Title Here</title>
print(soup.title.text)                     //Title Here

```


__Finding tags with specific attributes__
```python
from bs4 import BeautifulSoup
import requests

with open('subdomains.html','r') as f:
	soup = BeautifulSoup(f,'lxml')


print(soup.find('li',class_='list-group-item'))
```

> TIP: You can access the child tags using `.` 

__Find all Tags__
```python
from bs4 import BeautifulSoup

with open('subdomains.html','r') as f:
	doc=BeautifulSoup(f,'lxml')

li_tags=doc.find_all('li',class_='list-group-item')
for li_tag in li_tags:
	print(li.text,end='')
```


__printing attributes of tags__(printing src attributes of script tags)
```python
from bs4 import BeautifulSoup

with open('subdomains.html','r') as f:
	doc=BeautifulSoup(f,'lxml')

scx_tags=doc.find_all('script')
print(scx_tags)
for script in scx_tags:
	print(script['src'])
```

