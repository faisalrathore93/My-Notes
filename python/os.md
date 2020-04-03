## OS module


__List OS methods__
```console
print(dir(os));
```



__current Dir__
```console
print(os.getcwd())
```



__List dirs__
```console
print(os.listdir())

```



__Make One folder__
```console
os.mkdir('/Users/imranparray/Desktop/imran')

```



__Make folder Recursively__
```console
os.makedirs('/Users/imranparray/Desktop/dir1/dir2/dir3')

```



__Remove Single Folder__
```console
os.rmdir('/Users/imranparray/Desktop/imran')

```



__Remove Folder Recursively__
```console
os.removedirs('/Users/imranparray/Desktop/imran')

```



__Rename File/folder__
```console
os.mkdir('imran')
os.rename('imran','parray')
```



__File Info__
```console
import os
import time
print(os.stat('script.py'))
print(os.stat('script.py').st_size)
```



__os.seek()__(Tree for Linux)
```console
for dirpath,dirnames,filenames in os.walk('/Users/imranparray/Desktop/'):
	print("Dir: ", dirpath)
	print("Files: ", filenames)
	print("Folders: ", dirnames)
	print('------------------------') 
```



__Accessing Home Variables__
```console
print(os.environ.get('HOME'))
```


## os.path

__Join Two paths__
```console
print(os.path.join('imran','parray'))
```



__File name from the path__
```console
print(os.path.basename('/root/imran.txt')).   #imran.txt

```



__Dir name from Path__
```console
print(os.path.dirname('/root/imran.txt')).   #root

```






__Split the path __
```console
print(os.path.split(dirname))         #('/root/imran/naizz', 'asdsa.txt')
```



__If file exists__
```console
print(os.path.exists(dirname)) 
```



__iffile/isdir__
```console
print(os.path.isfile(dirname))
print(os.path.isdir(dirname))

```





____
```console

```



____
```console

```



____
```console

```


