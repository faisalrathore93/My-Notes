wget
====

Basics:
--------

wget url
	wget url1 url2 ...
	wget -i links.txt

output file
------------
	wget -O output.zip https://www.zip.com/file.zip


Resuming files:
------------------
	wget http://www.google.com/package.zip
	Ctrl+c	
	Move to same directory
	wget -c http://www.google.com/package.zip	



Wget in Background
------------------------
	wget -b http://www.google.com/package.zip

		To check the status open
		wget-logn and see status

Limiting the downloading speed
------------------------------------

	wget --rate-limit=100k http://www.google.com/package.zip


Usernames and passwords
------------------------------

	wget --http-username=username --http-password=mypassword -O output.zip http://www.google.com/file.zip

	wget --ftp-username=username --ftp-password=mypassword -O output.zip http://www.google.com/file.zip




