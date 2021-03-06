### Basic Shortcuts

| Description | Shortcut |
|:-:|---|
Send to Repeater	|Ctrl+R
Send to Intruder	|Ctrl+I
Forward intercepted Proxy message	|Ctrl+F
Toggle Proxy interception	|Ctrl+W

### Switching

| Description | Shortcut |
|:-:|---|
Switch to Target	|Ctrl+Shift+T
Switch to Proxy|	Ctrl+Shift+P
Switch to Intruder|	Ctrl+Shift+I
Switch to Repeater	|Ctrl+Shift+R
Switch to Project |options	Ctrl+Shift+O
Switch to Alerts tab	|Ctrl+Shift+A
Go to previous tab|	Ctrl+Minus
Go to next tab|	Ctrl+Equals

### Copy/Paste

|Type | Description | Shortcut |
|:-:|---|---|
Editor| Cut|Ctrl+X|
Editor| Copy|Ctrl+C|
Editor| Paste|Ctrl+V|
Editor| Undo|Ctrl+Z|
Editor| Redo|Ctrl+Y|
Editor| Select all|Ctrl+A|
Editor| Search|Ctrl+S|


### Issue reapter request

| Description | Shortcut |
|:-:|---|
Ctrl+G for  | "Issue Repeater request"



### Moving URls In/Out

| Description | Shortcut |
|:-:|---|
Copy Url        |      In
Paste as Request   |    Out

### Others

| Type | Description | Shortcut |
|:-:|---|---|
Editor| Go to previous search match|Ctrl+Comma|
Editor| Go to next search match|Ctrl+Period|
Editor| URL-decode|Ctrl+Shift+U|
Editor| URL-encode key characters|Ctrl+U|
Editor| HTML-decode|Ctrl+Shift+H|
Editor| HTML-encode key characters|Ctrl+H|
Editor| Base64-decode|Ctrl+Shift+B|
Editor| Base64-encode|Ctrl+B|
Editor| Backspace word|Ctrl+Backspace|
Editor| Delete word|Ctrl+Delete|
Editor| Delete line|Ctrl+D|
Editor| Go to previous word|Ctrl+Left|
Editor| Go to previous word (extend selection)|Ctrl+Shift+Left|
Editor| Go to next word|Ctrl+Right|
Editor| Go to next word (extend selection)|Ctrl+Shift+Right|
Editor| Go to previous paragraph|Ctrl+Up|
Editor| Go to previous paragraph (extend selection)|Ctrl+Shift+Up|
Editor| Go to next paragraph|Ctrl+Down|
Editor| Go to next paragraph (extend selection)|Ctrl+Shift+Down|
Editor| Go to start of document|Ctrl+Home|
Editor| Go to start of document (extend selection)|Ctrl+Shift+Home|




### Personalized Scans

![image](https://raw.githubusercontent.com/imran-parray/My-Notes/master/images/Personalized-scans.png)



### HTTP Pipelining

HTTP pipelining allows us to send muntilpe requests in the same repeater tab (if http pipeling is supported by server)

To enable this go to:

- Project options
- Streaming Responses
- Add Scope
```
Un-tick Update Content Lenght in Repeater
```

Now Paste Multiple Requests in repeater
![image](https://raw.githubusercontent.com/imran-parray/My-Notes/master/images/Screenshot_2019-11-11_09-53-05.png)

[Demo:](https://youtu.be/boHIjDHGmIo?t=337)



#### API Methods Testing 

Suppose You have an Endpoint list

```
/a
/b
/c
```
and you want to test
```
GET /a
GET /b
GET /c
POST /a
POST /b
POST /c
DELETE /a
DELETE /b
DELETE /c
```

- Send an request /xyz to intruder
- Select 2 Position in Request
- Select Attack Type `Pitchfork`
- Now Fill Payload list one with `HTTP Methods`
- And Fill Payload list two with `Endpoint lists`
