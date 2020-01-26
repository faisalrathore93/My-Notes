## 100 Day Learning Challange

### Email verification bypass

Try changing the response to the Web App to see if you can bypass the security controls. 
Plus: if you find an email verification bypass try registering with `admin@company.com` email

---


### Open redirect Bypass


redirect.php?url=https://evil.com | Blocked

redirect.php?url=/home              |    https://host.com/home

redirect.php?url=home               |    https://host.comhome

redirect.php?url=.evil.com          |    https://host.com.evil.com


