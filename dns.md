DNS
====


#### RR Records

The relationship between the name of a computer and an IP address is defined in the Domain Name
System ( DNS ) database. The DNS database is distributed worldwide. The DNS database contains
individual records that are called Resource Records ( RR )


#### Types of Domains

Top Level Domains (TLD) are defined in the root domain. 
We have two kind of TLD, Generic Top Level Domain (gTLD) =[edu,net,com...] mostly used by US
and Country Code Top Level Domain (ccTLD). = [in,us,uea...]


#### Reverse Translation

Changing Ip address to it Domain Name.
inaddr-arpa for IPv4
IP6.arpa for IPV6


#### Data Types on Name Servers

The data stored within the primary and secondary (local Disks) name servers is called authoritative data.

Furthermore, the name server reads from its memorycache/hint the zone data, which is not part of the data
from its administered zone (local disk), but nonetheless enables this data to connect with the root name
servers. This data is called nonauthoritative data.

```
Request --> primary Server --> cache --> Not found --> Localdisk --> Response 
Request -->Secondry Server --> cache --> Not found --> Zone transfer -->Response
```



#### Round Robin

Its a techniques used for Load Balancing
Assings many ip addresses to same domain name.



#### Resolver

Its a client programm which uses alot of library functions to query name servers. Its a clint programm which 
associated itself with the programm which needs services like http,ftp etc


### /etc/hosts


The Respective domain name and their ip addresses can be inputted here to make them resolve here

127.0.0.1	imran
127.0.0.1 	hackerscreed

http://imran --> http://hackerscreed --> 127.0.0.1



### Hostnames in LAN

There is protocol called netBIOS which is used to resolve ip address in the network layer

The Hosts on 



### DNS caching in windows

Widows uses caching mechanis to caching the respective ip addresses of visited domains and then uses that
cache for futher requests.

$ipconfig/displayDNS	---> See Cached Data
$ipconfig/flushDNS	---> Flush The Data

Later windows implemented WINS Database for DNS translation







### DNS Protocol



DNS protocol is a Request/Response Protocol
DNS protocol is not a transporting protocol as its a appilication layer protocol
DNS protocol uses both Tcp and udp protocol
DNS protocol used UDP for request/Response
DNS protocol uses TCP for Zone transfers






#### KeyPoints

The DNS name server isn't case sensitive. imran.com=IMRAN.com
The domain name can be upto 255 keywords
The string between two dots can be upto 63 keywords



DNS attacks
============



Cache Poisioning Attacks:  is an attack in which the cache of the server is attacker in which the hostname and their respective ip addresses are saved.

Version1:

