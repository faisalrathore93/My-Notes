 Securing Linux Machines
===================


# SANS

## improving OS security 

#### The basic things to do:
```
- install minimum OS
- Keep the Up to date on patched
- Kepp minimum services and Open ports
- User encrypted access
- intesive logging and Monitoring
```



#### install minimum OS
```
- Disable Services
- Patch Known Vulns
- Encryption
- FIlter Network Access
- Isolate Apps
- Run Unprivlaged apps [ one app per server (chroot)]
- Remove all OS information like Banners,headers etc
```
#### Patch VS Disable

Patching - Protects you from discovered exploit
Disaabling - Protects you from undiscovered exploit

If you didn't need it don't patch it disable it.


#### TIP: There is an bunch of stuffs in a linux machine that can be turned off and you still have a fully working machine


#### Minimu OS image
Choose the minim OS image file with less tools.
ask youself question like do you need this tools and apps in your os

```
- Which apps
-  Why compilers
- Why sharing tools
- Why data sharing tools
```

### Running Apps with minimal package dependencies

Most of the times the app vendors will install alot of useless packages to the system and can bring alot of vulns to the system so finding out whats the minimun no of packages to run your app (webserver,mailserver etc) on your server can really help alot.

So the best way to do that is :

```
- Get a PC1 with full install
- Get your production test system
-  install an app on your production minimal OS [ which won't run probably]
- Determine missing files/packages via error (strace tool) 
- Now figure out from PC1 package database which packages are being used by the app in pc1
- add the proper package in pc2 with proper dependencies
- repeat all the process
```

### Patches

- Mostly you should never add packages after the patches . Add them before the patches so that they are included in the patching process
- Automate the patch process ( do it automatically per 30 days ) (Cron jobs can be helpful)
- Mostly vendors have different "Patching" straighty which makes automation difficult for every vendor.

#### Rollback patches

Most of the times it happens when the patch brokes someothing in the system we can  create an snapshot of your system and roll back the system if the patch is breaking something in the system .

#### PCA (patch check Advance)
- it is a perl script

#### TIP: `yum` is better packaging straighty than others



### Stopping Useless Boot Processes

Most of the OS services are really necessary for people which are started automatically for the people . So keep them enabled for no reason doesn't make any sense. cause the more tools you have the more vulns will be their in the system.


Example:
SMNP,NFS,Samba,Automators,RPC services,GUI logins etc

Talking about the pacthes we have to look at the two directores
- /etc/init.d
- /etc/rc?.d

#### /etc/init.d
```
It is an traditional places for an scripts to be placed for running them at boot level where each script in the dir is suppose to control single service. 
```

#### /etc/rc?.d

```

these are multiple directoreis which contains links to the scripts in the /etc/init.d 

Looking at the numbers like rc1.d rc2.d these are called levels . which specifies OS that run level:

3-5 for Normal Multiuser linux
1-2 Single User mode 
3 Multi user with Networking

(It can varry for moden linxu OS)
```

#### Why do we have these folders.

So the actual problem was to find out which services to enable first so on. So the name convention `[SK]nn` which use where S is start and K is kill 

```

If the script started with S01 then its the first process to be started
if the script started with K01 then its the first procss to be killed 
```


```
root@root:~# ls /etc/init.d

alsa-utils           beef-xss          darkstat  hwclock.sh         lvm2             nginx          procps       screen-cleanup     sudo                 x11-common
anacron              binfmt-support    dbus      inetsim            lvm2-lvmetad     nmbd           ptunnel      smartmontools      sysstat
apache2              bluetooth         dns2tcp   iodined            lvm2-lvmpolld    ntp            redsocks     smbd               thin
apache-htcacheclean  console-setup.sh  docker    irqbalance         miredo           openbsd-inetd  rsync        snmpd              udev
apparmor             couchdb           exim4     keyboard-setup.sh  mysql            openvpn        rsyslog      speech-dispatcher  unattended-upgrades
arpwatch             cron              fail2ban  kmod               nessusd          pcscd          rwhod        ssh                uuidd
atftpd               cryptdisks        gdm3      lightdm            networking       postgresql     samba-ad-dc  sslh               virtualbox
avahi-daemon         cryptdisks-early  gdomap    live-tools         network-manager  pppd-dns       saned        stunnel4           wicd



root@root:~# ls /etc/rc?.d

/etc/rc0.d:
K01alsa-utils           K01beef-xss          K01dns2tcp   K01hwclock.sh  K01lvm2-lvmetad   K01network-manager  K01postgresql   K01saned              K01thin
K01apache2              K01bluetooth         K01docker    K01inetsim     K01lvm2-lvmpolld  K01nginx            K01ptunnel      K01smbd               K01unattended-upgrades
K01apache-htcacheclean  K01couchdb           K01exim4     K01iodined     K01miredo         K01nmbd             K01redsocks     K01snmpd              K01uuidd
K01arpwatch             K01cryptdisks        K01fail2ban  K01irqbalance  K01mysql          K01openbsd-inetd    K01rsyslog      K01speech-dispatcher  K01virtualbox
K01atftpd               K01cryptdisks-early  K01gdm3      K01lightdm     K01nessusd        K01openvpn          K01rwhod        K01sslh               K01wicd
K01avahi-daemon         K01darkstat          K01gdomap    K01live-tools  K01networking     K01pcscd            K01samba-ad-dc  K01stunnel4

/etc/rc1.d:
K01alsa-utils           K01beef-xss   K01exim4     K01irqbalance     K01nessusd          K01pcscd       K01samba-ad-dc        K01sslh
K01apache2              K01bluetooth  K01fail2ban  K01lightdm        K01network-manager  K01postgresql  K01saned              K01stunnel4
K01apache-htcacheclean  K01couchdb    K01gdm3      K01lvm2-lvmetad   K01nginx            K01ptunnel     K01smartmontools      K01thin
K01arpwatch             K01darkstat   K01gdomap    K01lvm2-lvmpolld  K01nmbd             K01redsocks    K01smbd               K01uuidd
K01atftpd               K01dns2tcp    K01inetsim   K01miredo         K01openbsd-inetd    K01rsyslog     K01snmpd              K01virtualbox
K01avahi-daemon         K01docker     K01iodined   K01mysql          K01openvpn          K01rwhod       K01speech-dispatcher  K01wicd

/etc/rc3.d:
K01apache2              K01darkstat  K01miredo         K01openvpn      K01snmpd              S01console-setup.sh  S01lvm2-lvmetad     S01smartmontools        S01virtualbox
K01apache-htcacheclean  K01dns2tcp   K01mysql          K01postgresql   K01speech-dispatcher  S01cron              S01lvm2-lvmpolld    S01stunnel4             S01wicd
K01atftpd               K01exim4     K01nessusd        K01ptunnel      K01ssh                S01dbus              S01network-manager  S01sudo
K01avahi-daemon         K01fail2ban  K01nginx          K01redsocks     K01sslh               S01docker            S01pcscd            S01sysstat
K01beef-xss             K01gdomap    K01nmbd           K01rwhod        S01anacron            S01gdm3              S01rsync            S01thin
K01bluetooth            K01inetsim   K01ntp            K01samba-ad-dc  S01arpwatch           S01irqbalance        S01rsyslog          S01unattended-upgrades
K01couchdb  

```

#### chkconfig [turn on/off services]

```
$chkconfig --list | grep on 					[All running services]
$chkconfig <service> off						[ Which will disable service in level 3-5]
$chkconfig --level 12345 <service> off 			[ Will disable service in all levels]

```
#### TIP: Paches can re-enable the services

#### Disable or (maybe restrict)

Some services can be disabled completely only if they didn't braek your system. But if you really need some of them maybe you can restric them to loophole interface etc.


#### Disabling inetd

Inetd is an demon which is used to provide remote adminstration service to the system like

```
- Remote logging in and issueing comands to the system
- Transfering file to or from the system.
```

and SSH can do that better

#### TIP: ssh doesn't run on initd demon . It runs it own demon to do the process.

#### Don't run sendmail for mailing purpose
 Looking at the sendmail it can be broken into 2 peices

- The Binary of the sendmail is used to send the mail from the machine to any other server on the internet

- But the port 25 is MTA (Message Transfer Agent) which is used to reaceave emails and route them to perfect destination but mostly of them aren't receaving emails at all so why not to turn it off and use  other paltform for email routing.


#### Disabling Syslog

Syslog is an services which listens on port  514/udp to recave the log message and stores them on HDD

Since the messages are completely unauthanticated anyone can send many resquest to your machine and fill the HDD

- It closed on linxu by default


#### GUI login's

- The Run level 5 comes will all Multiuser/Networking enabled [ With GUI ] OS
- The Run level 3 comes will all Multiuser/Networking enabled [ Without GUI ] OS

So running you system at run level 3 will help out. And how to do that is by changing your boot level

```
leafpad /etc/inittab

Now change 
id:5:initdefault:

to

id:3:initdefault 

```
Will will disable the GUI Logins in the system.


#### Remove Config Files for disabled services

- So noone can accidently re-enable them.


## SSH

Why SSH ?

Any Cleartext process/protocol can be suspectable to session hijacking

- Type of session hijacking attack
	- Local Attacks via snoop streams via kernel
	- Via Third Party Sessions

#### SSH

- Encrypted Login/FileTransfer Protocol
- Sessions are Encrypted
- Avilable Everywhere
-  Allows traffic to be tunneled through other VPN

#### SSH Server (sshd)

Start and Stop
```
service ssh start
service ssh stop

```

#### config file
```
/etc/ssh/sshd_config 
```

#### Change Default port
```
port 33						changes port to 33
```

#### Disable Root Login
```
PermitRootLogin no 			Restricts root login
```

#### Disable Root Login
```
PermitRootLogin without-password 			Restricts root login with passwords but private keys will still work
```


#### Change Max Auth Tries
```
MaxAuthTries 2
```

#### Some useful commands are:
```
-f : config file
-d : turn on degugging mode
-D : Do not demonize

```

#### Turn on Privilage Seperation
```
Google:it
```

#### Set PermitEmptyPassword

dont let your employees to login with empty password
```
PermitEmptyPassword no
```


#### Don't use .rhosts file
 
rhosts file contains IP addresses which are allowed to ssh without password to get shell on the box

never use it ? why ?

- Ip can be spoofed
- Host names can also be spoofed














#### TIP:

#### TIP:
#### TIP:
#### TIP:
#### TIP:
#### TIP:
#### TIP:
#### TIP:
#### TIP:
#### TIP:


# Other Course

-Linux Security Policies
-------------------------

	-Security Policies
		-Password Protection
		-Logs
	-Security Controls

	-Using MD5 Checksum
		$md5sum files.txt		[Now compare the md5 hash with its original hash]
	


	-Using Sudo for Giving Privilages to the users
--------------------------------------------------------		
		$useradd imran
		$passwd imran
		$groups imran 		[	 Remember the group of imran ]
		$cat /etc/sudoers
		>find "#Allow Members of the group sudo to execute any command"
		>Replace %somethig  to %group_name_of_imran
		$login
			>Username:imran
			>passwd:iamjokrrrr
			$sudo whoami
					root


-Performing Access control list on the file
----------------------------------------------
		-touch imran.txt
		$getfacl imran.txt			---		To see it Access control rules
		$useradd user1
		$useradd user2
		$useradd user3
		$passwd -d user1
		$passwd -d user2
		$passwd -d user3
		$setfacl -m u:user1:rwx imran.txt
		$setfacl -m u:user2:rw- imran.txt
		$setfacl -m other:--- imran.txt
		$getfacl imran.txt			---		To see its Access control rules




Blocking users from logging in
----------------------------------
		$cat /etc/passwd 			[ You can check the login 
		$usermod -s /usr/sbin/nologin user1
		>Now user1 will be blocked of login

Enabling users from logging in
--------------------------------
		$usermod -s /bin/bash user1







