WS CLI
=====

nstallation
-----------

apt install python-pip
pip install awscli


onfiguring the AWS
----------------------
Go to 
	Services --> IAM-->USers-->Add new user -->Create New Group-->Add Access [search s3 for s3 access] --> review -->save-->Download credentails.csv


etting Up credentails
-----------------------
$aws configure
Enter The details from the CSV file
Region:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html



ommands
-----------
Creating a bucket
------------------
	aws s3 mb s3://test-imran

listing all buckets
------------------
	aws s3 ls

Deleting a bucket
------------------
	aws s3 rb s3://test-imran

removing a bucket with data
-------------------------------
	aws s3 rb s3://test-imran --froce

Uploading a file
------------------
	aws s3 cp subs s3://tes-imran

removing a File
-----------------
	aws s3 rm s3://tes-imran/subs.txt

removing a Folder Recursively
--------------------------------
	aws s3 rm s3://tes-imran/subFolder --recursive 

Uplading a whole folder
------------------------
	aws s3 sync . s3://tes-imran

Listing Files
----------------
		aws s3 ls s3://tes-imran

Uploading a file
------------------
	aws s3 ls s3://tes-imran --rescursive


Reading a Contenst of file
----------------------------
	aws s3 cp s3://test-imran/file.txt -
			as s3 doesn't have cat command this trick can be used to Output the contents to terminal


Total size of your files in Bucket
-----------------------------------
	aws s3 ls s3://tes-imran --recursive | awk 'BEGIN {total=0}{total+=$3}END{print total/1024/1024" MB"}'





c2 Service
======
Getting Avilable regions
--------------------------
aws ec2 describe-regions --output table


Getting Avilable Regions
---------------------------
aws ec2 describe-availability-zones --output table
