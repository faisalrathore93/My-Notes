CUT
===

__cat a.txt__

```
root@kali:~/learning# cat a
imran nazir parray
Mubashir Mehraj parray
hafeez ullah mir
faizal ali bhat
```
### Bytes
__cut -b 1,2,3 a__

*Extraction specific bytes*

```
root@kali:~/learning# cut -b 1,2,3 a
imr
Mub
haf
fai

```

*Get only 1-4 bytes from each line in file a*

```
root@kali:~/learning# cut -b 1-4 a
imra
Muba
hafe
faiz

```


* From starting to 4*

```
root@kali:~/learning# cut -b -4 a
imra
Muba
hafe
faiz

...




*From 4 to ending*

```
root@kali:~/learning# cut -b 4- a
an nazir parray
ashir Mehraj parray
eez ullah mir
zal ali bhat

...



### Characters

__cat -c 1 a__

*Getting spefic characters*

```
root@kali:~/learning# cut -c 1 a
i
M
h
f

...





*Range of characters*

```
root@kali:~/learning# cut -c 1-5 a
imran
Mubas
hafee
faiza

...


###Fields

__cut -d " " -f1 a__

*fields are like columns in the file we can use any delimiters here and get the appropriate data*

```
root@kali:~/learning# cut -d " " -f1 a
imran
Mubashir
hafeez
faizal
```


*Using a as delimeter*

```
root@kali:~/learning# cut -d "a" -f1 a
imr
Mub
h
f

```


*Getting 2nd field*

```
root@kali:~/learning# cut -d " " -f2 a
nazir
Mehraj
ullah
ali

```

### Complement

__cut --complement  -d " " -f2 a__

*its like a not gate or an negative search. It will get everything except f2*

```
root@kali:~/learning# cut -d " " -f1 a
imran
Mubashir
hafeez
faizal

root@kali:~/learning# cut -d " " -f1 a --complement
nazir parray
Mehraj parray
ullah mir
ali bhat

```

###Output Delimiter

*replacing input delimiters with output delimiters *

```
root@kali:~/learning# cut -d " " -f1,2 a --output-delimiter='/'
imran/nazir
Mubashir/Mehraj
hafeez/ullah
faizal/ali

```
