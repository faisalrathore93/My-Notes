cURL
====



Get Requests:
---------------
	curl http://example.com/posts/3
	curl --head http://www.example.com/posts/3					---	show only the head of response
	curl -o output.txt http://www.example.com/posts/3			---	paste the output in output.txt	
	curl -O http://www.example.com/posts/3						---	Download the file

  

Post Requests:
---------------

	curl --data "username=admin&password=admin" http://www.example.com/login
	curl --d "username=admin&password=admin" http://www.example.com/login

Put requests:
---------------

	curl -X PUT -d curl --data "title=change me" http://example.com/posts/3

Delete Request:
---------------

	curl -X DELETE http://www.example.com/posts/3

Adding Authantication:
---------------------------

	curl -u username:password http://www.example.com/posts/3

Curl and FTP
----------------
	Uploading: curl -u account@website.com:password  -T local_file.txt ftp://ftp.example.com
	Donwloading: curl -u account@website.com:password -O ftp://ftp.example.com/ftp_file.txt


OPTIONS:
------------
	-L 			---	Fallow Redirection

