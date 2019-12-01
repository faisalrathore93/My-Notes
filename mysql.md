MySql
=====

Show databases:
------------------

	SHOW DATABASES
	SHOW TABLES

Viewing Colums:
------------------
	SELECT id FROM customers

Viewing Multiple Columns:
-----------------------------
	Select id,name FROM customers

Viewing All Columns:
-----------------------
	SELECT * FROM customers


Getting Distinct Records
---------------------------
	SELECT DISTINCT name FROM customers



Getting Limited Records
---------------------------
	SELECT name FROM customers LIMIT 5
	SELECT name FROM customers LIMIT 3,2
			Get 2 Records Starting from 3 = [3,4]

Sorting Details
---------------
	SELECT name FROM customers ORDER BY name
			Sort By column "name"
	
	SELECT * FROM customers ORDER BY name
			Sort whole table by column "name"
	
	SELECT * FROM customers ORDER BY name,id
			Sort by name and if same details came sort them by id
	
	SELECT * FROM customers ORDER BY id DESC
			Sort by id in decreasign order


Using Between
----------------
	SELECT * from customers where used_id BETWEEN 20 and 30
	SELECT * from customers where used_id NOT BETWEEN 20 and 30
	SELECT * from customers where birthDate BETWEEN '12/12/1997' and '12/12/1999'


Using WHERE
----------------
	SELECT name FROM customer WHERE id = 1
	SELECT name FROM customer WHERE id != 1
	SELECT name FROM customer WHERE id < 1
	SELECT name FROM customer WHERE id > 1
	SELECT name FROM customer WHERE id >= 1
	SELECT name FROM customer WHERE id <=1
	SELECT name FROM customer WHERE state='jummu'


AND and OR
--------------
	
	SELECT * FROM customer WHERE id = 1 AND name='imran'
				When Both The conditions matches any record print the record.

	SELECT * FROM customer WHERE id = 1 OR name='imran'
				If one condition mached with the record print the record




Using IN or NOTIN
--------------------
	SELECT * FROM customers where color IN ('black','white')
				Show all black and white persons
	
	SELECT * FROM customers where color NOT IN ('black','white')
				SHow all customers except with black and white color



Using Wildcards
-----------------
	SELECT * FROM customers WHERE name LIKE 'Admi'
				Select all customers whose name starts with Admi....
	
	SELECT * FROM customers WHERE name LIKE '%i%'
				Select customer whose name contains i anywhere

	SELECT * FROM customers WHERE name like a%m
				Select All customers whose name starts with a and ends with m

	SELECT * FROM customers WHERE name like '_mran'
				Select All customers whose name have One Alhphanumeric  fallowed by mran
				

	SELECT * FROM customers WHERE name like '[C-P]mran'
	SELECT * FROM customers WHERE name like '[0-9]mran'
		Select All customers whose name have C-P fallowed by mran in the name

		
	SELECT * FROM customers WHERE name like '[^i]mran'
		Select Eveyone except with the i at the beginning 


Using Regex
--------------
		SELECT * FROM customers WHERE name REGEXP 'i'
				Select all customers where they match i regular expression
		
		
		SELECT * FROM customers WHERE id REGEXP '[0-5]'
				Select all customers where id is from 0-5

		SELECT * FROM customers WHERE father REGEXP '[nazir|imran]'
				Select all customers whose father is nazir or imran
		

Concat()
---------

		SELECT concat("name","|",color) AS name_color FROM customers
				print name|color as name_color coloum 


Performing Methamatical Operations
----------------------------------------
		SELECT id,name,id+5 FROM as new_id customers 	
				print 3 columsn id name and id+1 from customares table


Some Functions()
-------------------
	SELECT AVG(cost) FROM customes
	SELECT SUM(cost) FROM customes
	SELECT SQRT(cost) FROM customes
	SELECT CONCAT(cost,"|",item) FROM customes
	
	
	SELECT count(items) from CUSTOMERS where seller_name='amazon'
			counter the no of items from amazon



 Using Group By 
-----------------
	its used to group the same elements in one group in this example it will show us two colums:

Male   : 23
Female:56

because its groups all the details by the gender and count them in one column.

	SELECT gender,count(*) from user_details GROUP BY gender
		

Using Subquries
-----------------
	SELECT AVG(user_id) FROM user_details	=	50
	SELECT username,user_id FROM user_details WHERE user_id>50
	
				OR we can do it using subquries
	
	SELECT username,user_id FROM user_details WHERE user_id>(SELECT AVG(user_id) FROM user_details)

	



Joining Two Tables
----------------------

		Simply Joining two tables without any conditions
	SELECT table1.username, table2.gender from table1, table2





		INNER JOIN:

		SELECT table1.name table2.email from table1 INNER JOIN table2 ON table1.id=table2.id

		


Union
-------
	
	Note: Union is used to get the output of the two sql quries in one request

	SELECT id,name,cost FROM customers WHERE id>30 UNION SELECT id,name,cost FROM customers WHERE cost <500





INSERT
---------
	INSERT INTO users VALUES('11','Imran','White','7')
			We have to insert data in order of colums in the TABLE



	INSERT INTO users(id,imran,color,height)  VALUES('11','Imran','White','7')
			We have to insert data in the order we have provided in the user(...) parenthesis



Inserting Multiple Colums at once
-------------------------------------
	INSERT INTO users(id,imran,color,height)  VALUES('11','Imran','White','7'),('12','Mubashir','White','6'),('13','veeri','White','7'),('14','Issac','White','7')



Inserting Data or Table1 to Table2
----------------------------------------
	INSERT into table2(id,name,color,height) SELECT * FROM table1


Updating Data
---------------
	UPDATE table_name SET name='imran2' WHERE id=100
	UPDATE table_name SET name='imran3', cost=300 WHERE id=300





DELETING ROWS
------------------
	DELETE FROM customers WHERE id=101

	Rows --------



Adding New Columms to Table
----------------------------------
	
	ALTER TABLE table_name ADD column_name TYPE(size)

	Add --- 	 ALTER TABLE customers ADD color VARCHAR(30)
	Delete---	 ALTER TABLE customers DROP COLUMN customers



Crating New Tables
---------------------

	CREATE TABLE users(id int(3), username varchar(30),password varchar(30),PRIMARY KEY(id))



Renaming the table
--------------------

	RENAME TABLE customers to users



Creating Viewstates
------------------------
	 SELECT * from family2 ORDER BY id DESC LIMIT 3
					Will Return a dynamic Table

	CREATE VIEW newiew AS SELECT * from family2 ORDER BY id DESC LIMIT 3
	
	SELECT * from newiew




Using case
------------

	Cases are used to create condtiotn and perform opration on the bases of conditions

	SELECT *, case when status=1 then 'Active' when status=0 then 'Disabled' else 'Deleted' end as active from user_details

		It will craete a new dynamic column with name as Active check if the status is 1
		will set text as ACTIVE or if the status is 0 then set it as Disabled else set as DELETED







