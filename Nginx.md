Nginx
====

installing 
-----------

	apt-get install nginx




Starting and Stopping the server
--------------------------------
	service nginx start
	service nginx stop

	Getting the PID: cat /var/run/nginx.pid
		kill -HUP pid		---	Quick Kill
		kill -QUIT pid		---	Graceful kill [ doesnt drop any inflight request ]






Location Directive
------------------
	
inside the 1st server brackets we can put location directory

server  {
	location / 
		{
		root /var/www/assets/;
                }

	location /js/ 
		{
		root /var/www/assets/;
                }

	}



Virtual Hosting
--------------
	server
	{
	listen *:80;
	server_name www.father.com;
	root /var/www/site1/;
	}

	server
	{
	listen 80;
	server_name www.son.com;
	root /var/www/site2/;
	}

	
Clearing the Default config
--------------------------
	replace http{...} part with 
	
	
	http {
 	server {
 	listen *:80;
	server_name "";
	root /usr/share/nginx/html;
	}
	}


Creating an Reverse proxy
--------------------------
	http {
 	upstream rails_app {
 	server 127.0.0.1:3000;
 	}

 	server {
 	listen *:80;
 	root /path/to/application/public;
 	location / {
 	proxy_pass http://rails_app;
 	}
 	}
	}


	Here the ngix waits for the http request on port 80 but once they are resolved 
	they are sent to the port 3000 and response are sent back to client.


A better Reverse proxy
----------------------
	server {
 	listen *:80;
 	root /path/to/application/public;
 	
	location / {
 	proxy_pass http://rails_app;
 	}
 	
	location /assets {
	location /path/to/static/files/;
 	}
	}

	in previous reverse proxy we are sending all the http requests to the server waiting on port 300
	but here we are serving all the js,cs,html,png [static] file through the nginx server and letting 
	the dynamic work done by server.

Adding cache headers 
-------------------
	location /assets {
 	expires max;
 	add_header Cache-Control public;
	}





Custome Error Pages
------------------
	server{
	location / {
	error_page 404 /404.html
	error_page 443 /443.html
	}
	}






Load Balancing
----------------------
	http{
	upstream backend{
	server 127.0.0.10;
	server 127.0.0.11;
	}
	server{
	listen 80;

	location / {
	proxy_pass http://backend;
	}
	}
	}




Load Balancing With Weighted Servers
-----------------------------------
	http{
	upstream backend{
	server 127.0.0.10 weight=2;
	server 127.0.0.11;
	}
	server{
	listen 80;

	location / {
	proxy_pass http://backend;
	}
	}
	}


	in this case the server 127.0.0.1 will have 2x requests that 127.0.0.11




Load Balancing With backup Servers
-----------------------------------
	http{
	upstream backend{
	server 127.0.0.10 weight=2;
	server 127.0.0.11;
	server 127.0.0.12 backup;
	}
	server{
	listen 80;

	location / {
	proxy_pass http://backend;
	}
	}
	}
	
	in case the server 10 and 11 are unavilable the requests are sent to 12
	if they are avilable none of the requests are sent to 12



Directives
---------
	root /root/Desktop/website/		---		Defines the http to html static files
	index imran.html			---		replace default index.html to imran.html 
	index imran.html maintainance.html	---		show maintainance.html if not then show imran.html
	
