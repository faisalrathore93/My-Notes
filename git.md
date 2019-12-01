Github
=====


Common Commands:
--------------------------

	git config			Configure git
	git clone			Clone the git dir
	git init			Create new git dir in pwd
	git add				Ready a git dir for uploading
	gi commit			Uplaod and commit the git repo

Configuring Username and password
-----------------------------------------

	git config --global user.name "imran1121"
	git config --global user.email "myemail@gmail.com"
	
Editing Global Setting
-------------------------
	git config --edit --config

Set default editor
-------------------------

	git config core editor  "leafpad -multiInst -nosession"


git-->add-->Commit
----------------------
	
	git init "MyAPP"					---		Creat a new git repo
	cd MyAPP
	touch Readme.md					---		Create a new file
	Edit Readme.md
	git add readme.md					---		Add readme.md to git repo
	git commit -m "First Commet" 		---		Commit the directory
 



Connection To github Account using SSH
--------------------------------------------
	ssh-keygen -t rsa -b 4096 -c "imran@gmail.com" 
				It will create two files
						Public key
						private Key
	gedit key.pub and Copy all
	go to github and add new ssh and paste it
	$ssh i "key" -T git@github.com"
                      



Search Stuffs on github
--------------------------
	dotnet starts:>100			---		search dotnet repos with stars greater than 100
dotnet stars:100..150			---		Search dotnot repos with stars 100..150
dotnet NOT "Hello world"		---		Search dotnet without hello world
















