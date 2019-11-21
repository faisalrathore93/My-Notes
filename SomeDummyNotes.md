# DAY-1

## SIEM

### What is SIEM
SIEM tools aggregate data from multiple systems and analyze that data to catch abnormal behavior or potential cyberattacks. SIEM tools provide a central place to collect events and alerts
SIEM is a data aggregator, search, and reporting system

### How it works
![img](https://blogvaronis2.wpengine.com/wp-content/uploads/2019/06/siem-process-2.png)

### Functions of SIEM
![x](https://blogvaronis2.wpengine.com/wp-content/uploads/2019/06/siem-capabilities-1.png)

### Examples:

- Splunk
- IBM Qradar
- LogRhythm


# SOC
A security operations center (SOC) is a facility that houses an information security team responsible for monitoring and analyzing an organization’s security posture on an ongoing basis. The SOC team’s goal is to detect, analyze, and respond to cybersecurity incidents using a combination of technology solutions and a strong set of processes. Security operations centers are typically staffed with security analysts and engineers as well as managers who oversee security operations. SOC staff work close with organizational incident response teams to ensure security issues are addressed quickly upon discovery.

The while SOC center can be divided into 4 parts/tiers and each of them have their own responsibility.

### SOC 1
![x](https://raw.githubusercontent.com/imran-parray/My-Notes/master/images/1.png)
### SOC 2
![x](https://raw.githubusercontent.com/imran-parray/My-Notes/master/images/2.png)

### SOC 3
![x](https://raw.githubusercontent.com/imran-parray/My-Notes/master/images/3.png)

### SOC 4

![x](https://raw.githubusercontent.com/imran-parray/My-Notes/master/images/4.png)


# Reactive and Pro Active Security Approaches

### Reactive
A reactive network security strategy is akin to a mousetrap: Set it and check it when it has gone off. But what if the IT staff misses that it caught something, or even worse, it misses the hacking attempt altogether? The former gives cyberattackers more time to get around the protocols in place, while the latter could bring down the entire network. It's a costly strategy that waits until something is broken before fixing it, but at that point the expenses can get out of hand. Legal and regulatory fees, reparation for any personal information stolen and a hit to reputation can be devastating.
### pro-active
A proactive approach utilizes a variety of mechanisms to continuously monitor network traffic. This is done in part to avoid the inherent flaw with patches: the fact that they don't always work, the Computer Crime Research Center reported. In fact, a fatal flaw in IT is relying on system updates to defend against every hacking attempt. It's a tall order when cyberattackers bring out a new method every few months.


# APT

### What is an APT
An advanced persistent threat (APT) is a prolonged, aimed attack on a specific target with the intention to compromise their system and gain information from or about that target.

The target can be a person, an organization or a business. When these threats were dubbed their targets were governments and military organizations. The word threat doesn’t mean to imply that there is only one kind of malware involved, because an APT usually consists of several different attacks.

Too many professionals in the security field an attack only qualifies as an APT if it is initiated by a government (agency) or a similar organization. Given the needed resources and patience this certainly make sense.

###Stages of an Advanced Persistent Threat
Not all of the stages listed below will be necessary in every situation and, depending on the target and the information that the attackers are after, the tasks in the list can be very different in time, and the amount of effort, spent on them. These can be very different from case to case.

- Get to know the target. This can vary from figuring out if there is anything worth stealing to compiling a list of employees, or even better, disgruntled ex-employees. Find out what interests the subjects, so you can use that information. in or spear-phishing attacks.
- Finding an entrance. This usually involves social engineering techniques like spear phishing and watering holes in order to deliver customized malware.
- Accomplishing a foothold. Get a target to run the malware on his system which is inside the targets network.
- Carefully widen the scope from the created foothold. For example reconnaisance of the network from an infected computer. This includes putting malware and other tools on the compromised system and hiding them.
- Find and steal the sought after or other valuable information. To do so, it may be necessary to raise the privileges of the compromised ssytem in the network.
- Once a firm grip on the network is established it may be necessary to move or widen the entry points in the network so a more permanent access to the information is secured. If there is no need for a permanent monitoring, the tools will usually be removed to cover up the tracks. Sometimes a backdoor is left in place to make a return easier.

## Tools

### foremost
![](http://i.cmpnet.com/ddj/samag/images/sam0309a/sam0309a.gif)

foremost is a forensics application to recover files based on their headers, footers, and internal data structures. Foremost can work on image files, such as those generated by dd, Safeback, Encase, etc, or directly on a drive. This short article shows how you can use foremost to recover deleted files.

#### Usage:

__Carving Whole file System__
```console
foremost /dev/sdb 
```

__Carving Specific file type__
```console
foremost /dev/sda4 -t pdf 
```

__input image file__

if we have image file we can use -i for specifying the image 
```console
foremost -t pdf -i disk.img 
```

__output folder__
```console
foremost -t pdf -i disk.img -o folderName
```

__audit.txt file__

The foremost saves the `output` in the `output` folder and there is one file called audit.txt which saves the information about what have been analysed through the scanning.

```console
cat audit.txt                                                                   ✔  ⚡  4268  09:12:25
Foremost version 1.5.7 by Jesse Kornblum, Kris Kendall, and Nick Mikus
Audit File

Foremost started at Wed Nov 20 09:11:18 2019
Invocation: foremost /dev/sda4 -t pdf 
Output directory: /root/output
Configuration file: /etc/foremost.conf
------------------------------------------------------------------
File: /dev/sda4
Start: Wed Nov 20 09:11:18 2019
Length: 365 GB (392068857856 bytes)
 
Num	 Name (bs=512)	       Size	 File Offset	 Comment 

0:	04181047.pdf 	       1 KB 	 2140696201 	 
Interrupt received at Wed Nov 20 09:12:32 2019

```
### ssdeep

__Basic__

By default, ssdeep generates context triggered piecewise hashes, or fuzzy hashes, for each input file. The output is proceeded by a file header.

```console
[user@localhost /workdir]$ ssdeep config.h INSTALL m4/libtool.m4
ssdeep,1.1--blocksize:hash:hash,filename
96:s4Ud1Lj96tHHlZDrwciQmA+4uy1I0G4HYuL8N3TzS8QsO/wqWXLcMSx:sF1LjEtHHlZDrJzrhuyZvHYm8tKp/RWO,"/workdir/config.h"
384:EWo4X1WaPW9ZWhWzLo+lWpct/fWbkWsWIwW0/S7dZhgG8:EWo4X1WmW9ZWhWH/WpchfWgWsWTWtf8,"/workdir/INSTALL"
6144:3wSQSlrBHFjOvwYAU/Fsgi/2WDg5+YaNk5xcHrYw+Zg+XrZsGEREYRGAFU25ttR/:ctM7E0L4q,"/workdir/m4/libtool.m4"
[user@localhost /workdir]$
```


__From the Standard Input__
```console
cat file.txt | ssdeep
3:q8wK6FuFWcEqlv:3wK6FN1I,"stdin"
```

__Recursive Mode__

Normally, attempting to process a directory will generate an error message. Under recursive mode, ssdeep will hash specified files and files in specified directory including its subdirectories. Recursive mode is activated by using the -r flag.
```console
[user@localhost /workdir]$ ssdeep *
ssdeep,1.1--blocksize:hash:hash,filename
/workdir/backups: Is a directory
96:KQhaGCVZGhr83h3bc0ok3892m12wzgnH5w2pw+sxNEI58:FIVkH4x73h39LH+2w+sxaD,"/workdir/config.h"
/workdir/www: Is a directory
```
```console
[user@localhost /workdir]$ ssdeep -r *
ssdeep,1.1--blocksize:hash:hash,filename
768:McAQ8tPlH25e85Q2OiYpD08NvHmjJ97UfPMO47sekO:uN9M553OiiN/OJ9MM+e3,"/workdir/mystuff.zip"
384:bcEKuglk+GUYIk90a1lEF+Wfsy2solvW8mK1enQXP79:bmlFGUNk9L1roy4K1enQ,"/workdir/backups/ssdeep.exe"
96:CFzROqsgconvv7uUo6jTcEGEvpVCN116S:CNVnqj8cMVCv16,"/workdir/backups/foo.doc"
96:KQhaGCVZGhr83h3bc0ok3892m12wzgnH5w2pw+sxNEI58:FIVkH4x73h39LH+2w+sxaD,"/workdir/config.h"
96:aN0jOc0WlWW+LWQnjv7ufGcE5ESr5YaZ6uicEDEO9VCN116Sb5EutkB:aSeoF+L/zqfGtfr5YiWcsVCv16W5htk,"/workdir/www/index.html"
[user@localhost /workdir]$
```

__Matching Two files__
```console
[user@localhost /workdir]$ ssdeep -b foo.txt >hashes.txt
[user@localhost /workdir]$ ssdeep -b -m hashes.txt bar.txt
bar.txt matches hashes.txt:foo.txt (99)
[user@localhost /workdir]$
```


__Different Between md5hash and ssdeep__

One of the more powerful features of ssdeep is the ability to match the hashes of input files against a list of known hashes. Because of inexact nature of fuzzy hashing, note that just because ssdeep indicates that two files match, it does not mean that those files are related. You should examine every pair of matching files individually to see how well they correspond.

Here's a simple example of how ssdeep can match files that are not identical. We take an existing file, make a copy of it, and append a single character to it.
```console
[user@localhost /workdir]$ ls -l foo.txt
-rw-r--r-- 1 user users 4274 Jan  2 03:04 foo.txt
[user@localhost /workdir]$ cp foo.txt bar.txt
[user@localhost /workdir]$ echo 1 >>bar.txt
```
A cryptographic hashing algorithm like MD5 can't be used to match these files; they have wildly different hashes.
```console
[user@localhost /workdir]$ md5sum foo.txt bar.txt
33e63a6fb553396089206212a5af17e3  foo.txt
890aecccf13601c80f194bce9f5f6d09  bar.txt
[user@localhost /workdir]$
```
But fuzzy hashing can! We compute the fuzzy hash of one file and use the matching mode to match the other one.
```console
[user@localhost /workdir]$ ssdeep -b foo.txt >hashes.txt
[user@localhost /workdir]$ ssdeep -b -m hashes.txt bar.txt
bar.txt matches hashes.txt:foo.txt (99)
[user@localhost /workdir]$
```
The number at the end of the line is a match score, or a weighted measure of how similar these files are. The higher the number, the more similar the files.

# Day 2


Verify the case image, which could be done:
```
$ewfverify Webserver.E01
```

Now, let us check our drive and what volumes does it include:
The Image can be seen as an layer structered of `container`>>`disk`>>`partitions`>>`files/Folders`
So this tool can be used to see the partitions without mounting the image
```
$mmls Webserver.E01
```
First, let’s mount the E01 file, which could be done as:
```
$sudo ewfmount Webserver.E01 ewf/
```

We will be using the kpartx tool to do the LVM mappings for the volumes we have. We
can do a listing first, followed by the mapping itself, as seen below:
List all partitions inside lvm
```	
$ sudo kpartx -al ewf/ewf1
```
map lvm partitions to /dev/paritions inside workstation system, to see the lvm after maping use lvdispay
```
$ sudo kpartx -av ewf/ewf1
```
Display mapped lvm 
```
$ sudo lvdisplay
```

Mount the Image
```
$ sudo mount -o ro,noatime,noexec /dev/VulnOSv2-vg/root case1/
```

Let’s do some checking first using ​fsstat​ to see why that happened:
```
$ sudo fsstat /dev/VulnOSv2-vg/root | head -n 20
```
	

If not mounted properly then adjust our command with the noload/norecovery option:
```
$ sudo mount -o ro,noatime,noexec,noload /dev/VulnOSv2-vg/root case1/
```

Let’s check the timezone of the system:
```
$ cat case1/etc/timezone
```


Task: check system logs

 
we are going to check is  wtmp ( logins and logouts) PTS is remote tty local 
```
$ last -f case1/var/log/wtmp | head -n 10
```

Now the btmp file (failed login attempts):
```
$ sudo last -f case1/var/log/btmp | head -n 20
```


Check the auth.log file and explain what happened:
```
$ sudo cat case1/var/log/auth.log
```
Let’s also check the ​lastlog​ file using the “​strings​” command:
```
$ strings case1/var/log/lastlog
```


#Task: Use sleuth kit tools 

List the inode numbers 
```
$ sudo fls -l /dev/mapper/VulnOSv2-vg/root
```
```
$ sudo fls -l /dev/VulnOSv2-vg/root ​inode#
```
Find the associated file with inode
```
$ sudo ffind /dev/VulnOSv2-vg/root ​inode#
```

Lets find the last log by inode 
	
``` 
$ sudo fls -l /dev/VulnOSv2-vg/root ​inode#​ | grep lastlog
```
we found many that means it was deleted 


We can extract a file from the volume using the TSK’s ​icat​ command:
```
$ sudo icat /dev/VulnOSv2-vg/root ​inode#​ | tee lastlog
```

Now check the file’s type and content with both the ​file​ and ​strings​ commands:
```
$ file lastlog
```
Then
```
$ strings lastlog
```

Task #5: Users, Groups, Permissions, etc
So, it seems a user was added to the system and another user ​'mail'​ was being used,
which is very weird!


Check users
```
$ cat case1/etc/passwd
```
Check passwrds to login
```
$ cat case1/etc/shadow
```
Check Groups 
```
$cat /etc/groups
```

__Q4: Who has sudo access, or in other words, is in the sudo group?__

Explore the directory and its contents.
__Q6: Did you find anything useful?__

Move on to investigate the mail user.
__Q7: Did you find anything in mail's home directory?__

Extract the contents of the ​.bash_history​ (a file that is used to store a history of all the
commands used on a Linux system). The dot at the beginning of the file, denotes that
this is a hidden file.

Date to recover
```
$ ​after​=$(date -d"-20days" +%s)
```

Dump file system journal 
```
$ sudo debugfs -R 'dump <8> ./journal' /dev/VulnOSv2-vg/root
```

Now, let’s perform the recovery 
```
$ sudo ext4magic -a DATE -b DATE -j ./journal -m -d output
```

Search through the files recovered and find the Kernel exploit used. As a hint on how to
do that, you can Google the name of the dot c file that you found to find what it is and
what it’s contents looks like, then use that in your search. The Linux ​find​ command is
very good for this, learn how to use it.


__Task #7: Finding how the threat actor gained access__

Q1: What “web application” was being used? (​Hint:​ /var/www/html)
Q2: Try to identify the version of the web application and do you think it was vulnerable?
Q3: Search through the web application server’s error and access logs. Did you find
anything? (​Hint:​ you should find weird POST requests.)


__Check the long string in the HTTP POST request.
Q4: What type of encoding is being used?__
Now, you might be asking, how can we decode the string we found? Well the answer is
very easy in this case. We can either ​echo​ the string to ​base64​ command or save it in a
file and cat to ​base64​ as we can see here (blob saved in post.txt file):
$ cat post.txt | base64 -d


__Task #8: Generating a super timeline and filtering it__

Timeline Generation 
```
$ sudo log2timeline.py​ -t / --parse linux,apache_access,apt_history timeline.case1 case1/
```


Finally, let’s filter our timeline and sort it using the psort.py tool, which can be done as:


```
$ sudo psort.py -z ​timezoneValue​ -o L2tcsv -w webserver.csv timeline.case1 “date > ‘2019-10-05 01:01:01’ AND date < ‘2019-10-08 01:01:01’”
 ```

 

