# Nmap scanning

## Basics Concepts


__MAC__

- 48 bits
- 6 bytes long
- Hex representation

DE:AD:BE:EF:CA:FE

- First 6 is OUI (Org unique identifier)
- Last 6 is extension indentifier

__IPV4__

- 32 bit address
- 4 octets
- Can be represented as Decimal 3232323232
- Can be represented as HEX C0A8010
- 2^32 Addressse possible (4.3 billion)

__Fregmentation__

Some network has MTU (maximum transmission unit) which is the maximu packet size that can be send over netowrk so sometime
packets need to be broke down in smaller units called the process of fragmentation.


__Classful Netoworks__

The Huge 1.4 billion ip addresses are converted in small classes 

| Class  | Range  | Leading Bits  |
|---|---|---|
| A  | 1.6 million  | 0  |
| B  |  65535 | 10  |
| C  |  256 |  110 |
| D  | Undefined  |  1110 |
| E  | Undefined  | 1111  |



__ARP:__

- Adress Resolution protocol 
- Used to find the Layer 2 Mac addresses for Layer 3 Ip addresses

__ICMP:__

- Internet control message Protocol
- Use to help other protocols
- Used for troubleshooting and error reporting
- Uses Types and codes instead of ports


__PING:__
__TCP:__
__PORTS:__
__Traceroute:__





__Connect Scan__ (-sT)

Open port:

- A --> Syn --> B
- A <-- Syn Ack <-- B
- A --> ACK --> B
- A --> RST/ACK --> B (To Reset/Close the connection)

Close Port:

- A --> Syn --> B
- A <-- RST/Ack <-- B


__Syn Scan__ (-sS)

Open port:

- A --> Syn --> B
- A <-- SYN/ACK <-- B
- A --> RST --> B (To Reset/Close the connection)


Close Port:

- A --> Syn --> B
- A <-- RST/Ack <-- B

### Port Status

|Status | Meaning |
|---|---|
|Closed | ICMP Port Unrecheable error |
|Filtered | ICMP Port Unrecheable error |
|Open/Filtered | No response |
|Open | Any Response |


## Scanning

__Simple scan__

```console
root@root:~# nmap localhost

```

__Simple TCP scan__ (Explicit 3 way handshake scan)

```console
root@root:~# nmap -sT localhost

```



__Simple UDP Scan__

```console
root@root:~# nmap -sU localhost

```



__Nmap OS scan__
```console
root@root:~# nmap -p80 -O localhost

```



__Nmap Service Detection__
```console
root@root:~# nmap -sV -p80 localhost

```



__Dont ping just Scan__
```console

root@root:~# nmap -PN -p80 localhost

```



__Nmap Aggressive Scan__
```console
root@root:~# nmap -A localhost


```


__Nmap ACK Scan__
```console
root@root:~# nmap -sA localhost

```



__Nmap FIN Scan__ (Use fin Packets)
```console
root@root:~# nmap -sF localhost

```
__Nmap ACK Scan__
```console
root@root:~# nmap -sA localhost

```
__Nmap Xmas Scan__
```console
root@root:~# nmap -sX localhost

```

__Nmap Null Scan__ (send packets will all flags turned off)
```console
root@root:~# nmap -F localhost

```

### Different Ping Scans

__No port scanning__ (to check if the host is up)

```console
root@root:~# nmap 127.0.0.1-5 -sn 
```
__ARP ping scan__
```console
nmap -PR 127.0.0.1
```


__No ping Scan__
```console
nmap -Pn 127.0.0.1
```
__ICMP ping Scan__
```console
nmap -PI 127.0.0.1
```
__ICMP Echo ping Scan__
```console
nmap -PE 127.0.0.1
```

__No Timestamp Scan__
```console
nmap -PP 127.0.0.1
```
__SYN ping Scan__ (Much like SYN scan but with ACK)
```console
nmap -PP 127.0.0.1
```

__UDP ping Scan__
```console
nmap -PU 127.0.0.1
```

__TCP ping Scan__
```console
nmap -P 127.0.0.1


```



__Nmap Protocol Scan__
```console
nmap -sO 127.0.0.1
```


__Nmap DNS lookup Scan__
```console
nmap -sL 127.0.0.1
```

__Nmap Never DNS lookup Scan__
```console
nmap -n 127.0.0.1
```


__Nmap Traceroute Scan__
```console
nmap --traceroute google.com
```



### Wildcards

The targets can be specified in 3 different ways

- Wildcards -- 192.168.43.*
- Range     -- 192.168.0-255.0-255
- CIDR      -- 192.168.0.0/16

### Options:

```console
nmap 192.168.43.*
```
```console
nmap 192.168.43.0-255
```
```console
nmap 192.168.43.0/10
```



### Other Options:


__Randomize Hosts while scanning__
```console
root@root:~# nmap 192.168.43.200-239 --randomize_hosts -f
```

__Specify Network Interface__
```console
root@root:~# nmap 192.168.43.200-239 --randomize_hosts -f
```


__Nmap Use packets fragmentation__
```console
root@root:~# nmap 192.168.43.239 -f
```


__Nmap Verbose__
```console
root@root:~# nmap 192.168.43.239 -v
```

__Nmap Very Verbose__
```console
root@root:~# nmap 192.168.43.239 -vv
```

__Nmap show Reason__
```console
root@root:~# nmap 192.168.43.239 -p80,21 --open --reason
```

__To exclude the Host__
```console
nmap 127.0.0.1-255 --exclude 127.0.0.1
```
__Input list__
```console
nmap 127.0.0.1-255 -iL hosts.txt
```

__Exclude the range of ip addresses__
```console
nmap 127.0.0.1-255 --excludefile hosts.list
```


## Script Engine

__Simple Script scan__

```console
nmap 192.168.43.* --script script-name
```



__Default Script scan__

```console
nmap 192.168.43.* -sC script-name
```


__Catogary Script scan__

```console
nmap 192.168.43.* --script safe|intrusive|malware|version|discovery|vuln|auth|default
```



### Ports

__Top 1000 Ports__

```console
nmap 192.168.43.*
```


__All ports__
```console
nmap -p- localhost
```

__Port range__
```console
nmap -p 0-65535 localhost
```


__Specific Ports__

```console
nmap 192.168.43.1/24 -p 80
```

__TCP and UDP Ports__

```console
nmap 192.168.43.1/24 -p T:80,U:53
```


__Show only open ports__

```console
root@root:~# nmap 192.168.43.239 -p- --open

```





## Logging

__Nmap Simple Human Normal Output__

```console
root@root:~# nmap 192.168.43.239 -p- -oN output.file

```


__Nmap Simple XML Redeable Output__

```console
root@root:~# nmap 192.168.43.239 -p- -oX output.file
```


__Nmap Simple Grepabel Output__

```console
root@root:~# nmap 192.168.43.239 -p- -oG output.file

```


__Nmap Simple All Output__

```console
root@root:~# nmap 192.168.43.239 -p- -oA output.file

```


### How it works

#### How nmap Detect Services

> There is an file `/usr/share/nmap/nmap-services` which contain the list of port number and an expected services on those port
```
vettcp	78/tcp	0.000000
vettcp	78/udp	0.000626
finger	79/tcp	0.006022
finger	79/udp	0.000956
http	80/sctp	0.000000	# www-http | www | World Wide Web HTTP
http	80/tcp	0.484143	# World Wide Web HTTP
http	80/udp	0.035767	# World Wide Web HTTP
hosts2-ns	81/tcp	0.012056	# HOSTS2 Name Server
hosts2-ns	81/udp	0.001005	# HOSTS2 Name Server
xfer	82/tcp	0.002923	# XFER Utility
xfer	82/udp	0.000659	# XFER Utility
mit-ml-dev	83/tcp	0.000539	# MIT ML Device
mit-ml-dev	83/udp	0.001203	# MIT ML Device
ctf	84/tcp	0.000276	# Common Trace Facility
ctf	84/udp	0.000610	# Common Trace Facility
mit-ml-dev	85/tcp	0.000690	# MIT ML Device
mit-ml-dev	85/udp	0.000610	# MIT ML Device
mfcobol	86/tcp	0.000138	# Micro Focus Cobol

```

So even starting an `HTTP server` on port `3306` will result showing up `Mysql` detected by `Nmap`.

```console
root@root:~# python -m SimpleHTTPServer 3306
Serving HTTP on 0.0.0.0 port 3306 ...

```

```console
root@root:~# nmap localhost
Starting Nmap 7.70 ( https://nmap.org ) at 2020-03-24 19:22 HDT
Nmap scan report for localhost (127.0.0.1)
Host is up (0.0000060s latency).
Other addresses for localhost (not scanned): ::1
Not shown: 998 closed ports
PORT     STATE SERVICE
80/tcp   open  http
3306/tcp open  mysql

```



__Nmap Resume Saved Scan__

```console
```
