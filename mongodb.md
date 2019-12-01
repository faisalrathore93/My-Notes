Mongo DB





Structure:
-----------
	database ---> Collections ---> Documents

	
Installing:
----------
	Go to https://www.mongodb.com/download-center?jmp=nav#community
	Download it
	tar xf file.tar.gz
	go to file system and create /data/db [besides root folder]
	cd folder/bin/
	./mongod		---	Starts The server
	./mongo		---	Stops the Server

	if SSL_ERROR Occured:
	
	sudo apt-get install libcurl4 php-curl


Basic Commands:
-------------------

	use dbname		---	It will cd to dbname if exits otherwise creat it if not exist
	db				---	to see current db
	show dbs			---	list all databases [ Only those who have atleast one document inside ]



Inserting Document 
---------------------
	db.collectionName.insert({"data":"value"})
	
	db				 ---	Predefine keyword [ Represents Current db ]
	collectionName	 ---	Input Collection name here 
	({"":""})			 ---	Represents Data



Dropping Database
---------------------
	db.dropDatabase()



Collections
------------
	db.createCollection("students") 	---	Create collection in current db witn students name
					OR
	db.newCollectionName.insert({"name":"imran"})		---	By directly Inserting the data

	show collections				---	Show collections inside db
	db.newCollectionName.drop()	---	Drop collection



Inserting Documents
------------------------
	Document usually are in json format

	Inserting Single documents
		db.persons.insert({"name":"imran", "color":"red", "age":"30"})

	Inserting Bulk Records

	db.person.insert([{"name":"imran","color":"red","age":"20"},{"name":"mubashir","color":"brown","age":"22"},{"name":"zubair","color":"white","age":"22"},{"name":"hafeez","color":"brown","age":"23"},{"name":"ubaid","color":"black","age":"25"}])






Retrieving data from the Database
--------------------------------------
	db.collectioName.find()					----		List/Find all the data
	db.collectioName.findOne()				----		List/Find on data from db
	db.collectionName.find().pretty()			----		List all objects in pretty format

	->Equal to 
		
			db.collectionName.find({"name":"imran"})	----		List/Find object with name imran


	->Less than
		db.collectionName.find({"age":{$lt:"30"}})

	->Greater Than	
		db.collectionName.find({"age":{$lt:"30"}})

	->AND 
	Syntx:	db.collectionName.find({COND1},{COND2})
			db.collectioName.find({"skills":"MongoDB","salary":"50000"}) 		
					Find all who have mongoDB skill and an salary of 50k

	->OR
	Syntx:	db.collectioName.find $or [{COND1},{COND2}]
		 	db.collectionName.find $or: [{"skills":"MongoDB"},{"salary":"50000"}]



	->Combining OR and AND

	db.collectionName.find({"color":"white",$or{"salary":"5000"},{"salary":"80000"}})
			List all files whose color is white and whose salart is 50k or 80k


Retrieving specific fields
---------------------------
	db.collectioName.find({selectionCriteria},{selectionFields})
	
	Ex:
			db.collectioName.find({},{"name":1})	---	print only name from the documents
			db.collectioName.find({},{"name":0})	---	print Everthing but not name
			db.collectioName.find({},{"name":1,"_id":0})	---	print only name without color
 

Limiting The No of results:
-----------------------------
	db.collectionName.find({},{"name":1,"id":0}).limit(3)


Skipping the fields
---------------------
	db.collectionName.find({},{"name":1,"id":0}).limit(3).skip(2)


Sorting 
-------
    Acending:
	db.person.find({},{"name":1}).sort({"name":1})
	db.person.find({},{"name":1}).sort({"name":-1})



Updating Documents
------------------------
	db.collectionName.update({matching_criteria},{uptdatethis},{all or single})

	Ex:
		db.collectionName.update({"skill":"CEH"},{$set "salary":"100000"},{multi:false}) 		--- Update just first one in founded list
		db.collectionName.update({"skill":"CEH"},{$set "salary":"100000"},{multi:true})			--- Update all that mached the matching_creteria



Remving Documents
------------------------
	db.person.remove({"_id" : ObjectId("5b80d8a2f6e19e975a47e52f")})  
	db.person.remove({"name":"imran"})								----	Deletes all which matches the matching criteria
	db.person.remove({"name":"imran"},1)								----	Deletes only 1st record.








