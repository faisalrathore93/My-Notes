Linux Course
===========

Useful Tricks
--------------
#### Bang Bang
-----------
		!!							Execute previous command
		sudo !!						Execute previous command with sudo

#### Cut and Yank
--------------
		Ctrl+k						Cut Command from cursor to end 
		Ctrl+u						Cut the Line from the cursor to the beginning of line
		Ctrl+y						Yank the text back.
		Ctrl+w						curl backwards word by word

#### Mix cut and yank
-----------------
		Suppose you extered an command and you forgot to add something at the 
		the beginning of line just type 
		
		Ctrl+u
		type the sudo
		Ctrl+y
	
#### Editing Command in Text Editor
----------------------------------
		If you are editing an Very Big command you can type
		
		Ctrl + x + e 			[Hold the Ctrl]

#### Watch you bash script in debug mode
------------------------------------------
		bash -x script.sh


Basic Commands:
-----------------


	awk '!seen[$0]++' input > output			---	Remove Duplicates from the file
	rev urls.txt | sed -re 's/(\w+\.\w+\/)?//' | rev	---	remove files at the end of urls
	lsb_release -a						---	Check Your Release version
	login 
	Ctrl + alt +f1 						---	Go go CLI mode
	~							---	Shows you are in the home directory
	$							---	prompt is waiiting for the input
	#							---	You are loged in as root
	
	logout
	whoami
	who						---	Who is logged into the system
	w						--- 	similar to who but it shows extra information 
	last 						---	is used to find out who has recently used the system and which terminal they used and when they logged in and lopgged out
	
	
Process:
----------------
	ps
	ps -p 1149					---	list the process with id 1148
	ps -u 						--- 	list for all users
	ps aux						---	list all processes including system processes
	ps aux | less					---	list all processes and pipe them to less command
	top 						---	show continually updated processes list 
	
	
	
	
jobs
----------------
	Ctrl+z						---	Suspending the job to background
	Ctrl+c						---	terminate the job.
	man nmap &					---	Start job in background
	fg %1						---	Brng job 1 to foreground
	kill %4						---	Kill job no 4
	history						---	Check Hisotory
	!2031						---	Execute command no 2031 from the history
	
cp
----------------
	cp myfiles destfiles
	cp -p myfiles destfile				---	sets same properties for desfile even the timespan
	cp -R folder1 folder2				---	Copies the whole directory into the folder2
	
	
chcase
----------------
	chcase * 					---	change all the files name to lower cases in current working directory
	chcase -u *					--	change all the files name to upper cases in current working directory
	
	
ls
----------
	
	ls -l
	ls -F						---	list files with their types
	ls -R						---	list files recursively
	ls -R /						---	List all files on system
	ls -lR						---	list all files recursively with verbous information
	ls -a						---	list all files includng hidden one
	ls --color					---	list files in color
	ls -lS						---	Sort by size [larger size on top]
	ls -lSr						---	sort by size [smaller size on top]
	tree
	tree ~						---	tree all files from root
	
	
du [directory disk usage]
------------------------------------
	du						---	Disk Usage by Directories
	du -a 						---	Disk Usange By all files+Directories
	du | sort -n 					---	get the smallest folder in the list
	du | sort -nr 					---	get the largest folder in the list
	
	
	
groups
------------------
	groups						---	To see the membership of groups
	groups root					---	To list the membership of user root [ member of how many groups ] 
	members group1					---	To list the member of group1
	
	
	
	
Finding Files
------------------------
#### By Name:
	------------	
	locate NAME
	locate *.extension
	find / -name nmap				---	Find from root all file with name "nmap"
	find / -iname nmap				---	Find from root all file with name "nmap" regardless of case sensitive
	find / -name 'nmap*'				---	Find from root all files with starting name as root
	find / -name 'nm??'				---	Find from root all files with starting name as root
	find / -name 'nm??*'				---	Find from root all files with starting name as nm and the two chars or more
	find ~ -iname '*.txt'				---	Find all the files in the root directory with txt extension
	find /usr/share -name '*nmap*'			---	Find all the files in the /usr/share which contains text nmap
	
#### Bysize:
	-------
	
	find . -size 300b				---	Find all file with size 300 bytes
	find . -size +300b				---	Find all file with size more than 300 bytes
	find . -size -300b				---	Find all file with size less than 300 bytes
	find ~ -empty 					---	Find all file with emptysize
	
	
#### ByTime:
	-------
	
	find ~ -mtime 1					---	Find all the files which were modiefied before one day [24 hours]
	find ~ -mmin 5					---	Find all the files which were modified befire 5 minutes
	find / -mtime 2 -mtime -4 			---	Find all the files which were modified before 2 to 4 days
	
	
#### By owners:
	----------
	
	find /usr/share/fonts -user imran		---	Find all the files in /usr/share/fonts owened by imran
	find /dev -group hackers			---	Find all the fiels in /dev which are owened by group hackers
	
	
#### Finding and Executing commands on Found files:
----------------------------------------------
	
	find . -name '*.html' -exec cat '{}' ';'		---	Find all the files with html extension and execute cat command in them
									here {} represents the set of files found by found command
	
	find . -name '*.html' -ok rn '{}' ';'			---	Find all the html files and check which command will be executed on them just to confirm
									the removal of files. This is a test command and it should be run before -exec
	
	
	
#### combining things:
-----------------
	find / -name '*.html' -size +300b 			---	Find all the html files who size more than 300
	 
	
	
	
	
	
#### Determining files:
-----------------
	
	file file.txt						---	Determinging the file type
	file -z file.tar.gz					---	Determine the text inside the compressed file
	touch file.txt						---	Change it modification time
	touch -d "14 May 2016 12:00" file.txt			---	Change the timestamp of file.txt
	
	
	
	
	
Spilitting Files
------------------------------	
	split bigfile.mp4					---	by default 100 line per file
	split -b1m bigfile.mp4					---	Splits file in files of 1 mb 
	split -b1k bigfile.mp4					---	Splits file in files of 100 kb 
		
		Note: The file will be created as xa xb xc xd ...xaa xab xac... xaaa xaab ..
	
	cat x* > bigfile.mp4 					---	
	
	
	
	
	
Comparing files:
------------------------------	
	cmp master backup
	diff file.old  file.new
	sdiff file.old file.new
	
	
	
Compressing and extracting files:
------------------------------------------
	gzip imran.file					---	compress
	gunzip imran.gz					---	extract
	tar -cfv output.tar folder			---	make on tar ball for folder [ tar ball ] [ no compression ]
	tar -zvcf output.tar.gz folder 			--- 	compress folder to output.tar.gz [with compression]
	tar -ztvf file.tar.gz				---	list the contents of compressed tar ball
	tar -tvf file.tar				---	list the contents of tar ball
	tar -xvf file.tar				---	Extract tar ball
	tar -zxvf file.tar.gz				---	Extract Compressed tar ball
	
	
	
	
	
	
Texts
------------	
	
	
	cat largefile.txt | less		---	cat files
	cat -v file.pdf 			---	cat no printable characters
	head -1					---	print 1st line
	head -66				--	print 1st 66 lines
	head -c1 file.txt			---	print 1st char
	head -c3 file.txt			---	print 1st 3 char
	tail -14 file.txt			---	last 14 lines
	tail -f file.txt			---	watch updates in the tail of file 
	
	
	
formatting text:
---------------
	fmt -u file.txt				---	Remove all extraspacing
	grep . file.txt				---	Remove all empty lines
	
	
	
	
Sorting text:
------------
	sort names.txt				---	sort alphabatically
	sort -r names.txt			---	sort reverse
	nl names.txt				---	Give numbers to lines in text file but not spaces
	nl -v 3 -i 2 names.txt			---	give numbers to line starting from 3 and increment every line number with 2
	cat -n names.txt			---	give line bumbers to bland lines also
	sort -n names.txt 			---	sort by numeric data inside the file
	sort -R names.txt			---	Random sort
	
	
	
	
	
	
	Reading Charsets:
	---------------------

	man ascii				---	read ascii char set
	man ISO_88 [tab key] 			---	iso_88??_??? char sets
	
	
	
	
Files:
------------	
	cat /etc/hostname				---	Check the hostname 
	cat /etc/motd					---	Check the message of the day [message which you get when you login to the system]
	/var/log/wtmp					--- 	information about the last logged users in the system




Aptitude
----------
	apt-get install aptitude
	aptitude



	apt-get autoremove 			---	Remove packages which are not used for anything
	apt-get remove gedit 			---	Remove installed files for gedit
	apt-get purge gedit 			---	Remove everything related to gedit
	apt-get check 				---	Check Broken packages and fix them
	apt-get -d gedit			---	download gedit package
	apt-get install gedit -f 		---	Force install
	apt-cache search gedit			---	check packages named gedit on servers

	dpkg --get-selections | grep hold	---	Checking Broken Packages
	dpkg --get-selections | more		-- 	Check installed packages and Their State
