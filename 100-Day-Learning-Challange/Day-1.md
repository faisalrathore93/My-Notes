## 100 Day Learning Challange
## Day 1
### JsonP and XSSI

If any of the information is leaked on an 

- Unprotected Endpoint (Which require No auth-Token, Header and Origin Checks)
- In Any file with Extension `.js` or `.json`

we can include the paticular endpoint to out website and steal the info.

__Example__
https://imran.com/profile.js 

Returns:

```js
var name="imran";
var age=20;
var email="something@gmail.com"
```
The attacker can use POC as

```html
<html>
  <body>
    <script src="https://imran.com/profile.js">
    <script>
      <script>
        alert(email);
      </script>
   </body>
 </html>
```

__Refrences:__
- [https://hackerone.com/reports/138270](https://hackerone.com/reports/138270)
- [https://medium.com/bugbountywriteup/effortlessly-finding-cross-site-script-inclusion-xssi-jsonp-for-bug-bounty-38ae0b9e5c8a](https://medium.com/bugbountywriteup/effortlessly-finding-cross-site-script-inclusion-xssi-jsonp-for-bug-bounty-38ae0b9e5c8a)

---

### Subdomain takeover on Panthon
If you found an `404 Not Found` Subdomain with `penthon`
![xxx](https://smaranchand.com.np/wp-content/uploads/2019/12/unclaimed_subdomain.png)

It's Vulnerable to Subdomain Takeover

__Refrences__

[https://smaranchand.com.np/2019/12/subdomain-takeover-via-pantheon/](https://smaranchand.com.np/2019/12/subdomain-takeover-via-pantheon/)

---


### Bypassing SOP using Browser Cache

- Lets Suppose we have an Endpoint /imran.php Which allows caching to be done
- At the same time this is the CORS policies on the fallowing endpoint
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET
Access-Control-Allow-Headers: Content-Type, Authorization, Content-Length, X-Requested-With
Access-Control-Allow-Credentials: false
```

Which means 
- Any website can Send the Crossite Request
- No Crossite Request will be allowed to send with the cookies

But looking at the code at imran.php
```php
<?php



header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization, Content-Length, X-Requested-With');
header('Access-Control-Allow-Credentials: false');
header('Content-Type: application/json');


if($_COOKIE['name']=='imran')
{

echo '{"email":"imran","Age":"12","Age":"12","Agxxxaaxe":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12","Age":"12"}';
}
else
{
	setcookie('name','imran');
}
?>

```

We need cookies to get the info from the server. But Cross requests aren't allowed to send the cookie. This looks an Dead end but  it’s possible to use javascript’s fetch API to force a request cross-origin to retrieve from the browser cache directly. Keybase did not implement any cache-control headers in the response, so I created a payload locally (The null origin won’t matter) like so:

```html
 it’s possible to use javascript’s fetch API to force a request cross-origin to retrieve from the browser cache directly. Keybase did not implement any cache-control headers in the response, so I created a payload locally (The null origin won’t matter) like so:
```

- If you got the response on your `console` that means this information can be stolen by attackers by attackers.


__Refrences__
- [https://enumerated.wordpress.com/2019/12/24/sop-bypass-via-browser-cache/](https://enumerated.wordpress.com/2019/12/24/sop-bypass-via-browser-cache/)
- [https://hackerone.com/reports/761726](https://hackerone.com/reports/761726)

---

### DOM based XSS

Always Look at how Ajax request are made. Search for the code which handle the ajax requests. The data they receaving may be user controllabe and you may get the DOM based XSS.

__Refrence__
[https://jinone.github.io/bugbounty-a-dom-xss/](https://jinone.github.io/bugbounty-a-dom-xss/)


--- 


### Double Send Cookies

If the CSRF token are send in Cookies and parameters as well.

- Check if you can change the parameter value to invalid since the cookie value will be right it may bypass the CSRF protection.


---

### 2nd Order Sudomain Takeover

- Always have a look at `Network` tab of `Google Developer Toolkit` for 404 Error loading of the website.

--- 





## Day 5

### Blind XSS to RCE

Always try to steal the DOM of the admin page it will lead access to more juicy information than Cookies

__refrence__:
https://blog.saycure.io/2019/01/24/antihack-xss-2-php-upload/






Last : Chaining Tricky OAuth Exploitation To Stored XSS

