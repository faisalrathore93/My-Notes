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
```console
Starting Nmap 7.70 ( https://nmap.org ) at 2020-03-19 07:45 HDT
Nmap scan report for localhost (127.0.0.1)
Host is up (0.0000030s latency).
Other addresses for localhost (not scanned): ::1
Not shown: 996 closed ports
PORT     STATE SERVICE
21/tcp   open  ftp
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 0.09 seconds

```
---


__Simple TCP scan__ (Explicit 3 way handshake scan)

```console
root@root:~# nmap -sT localhost

```
```console
Starting Nmap 7.70 ( https://nmap.org ) at 2020-03-19 07:45 HDT
Nmap scan report for localhost (127.0.0.1)
Host is up (0.0000030s latency).
Other addresses for localhost (not scanned): ::1
Not shown: 996 closed ports
PORT     STATE SERVICE
21/tcp   open  ftp
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 0.09 seconds

```
---




__Simple UDP Scan__

```console
root@root:~# nmap -sU localhost

```
```console
Starting Nmap 7.70 ( https://nmap.org ) at 2020-03-19 07:46 HDT
Nmap scan report for localhost (127.0.0.1)
Host is up (0.0000070s latency).
Other addresses for localhost (not scanned): ::1
Not shown: 999 closed ports
PORT   STATE         SERVICE
68/udp open|filtered dhcpc

Nmap done: 1 IP address (1 host up) scanned in 1.30 seconds

```
---


__SYN Scan__

```console
root@root:~# nmap -sS 127.0.0.1 
```
```console
Starting Nmap 7.70 ( https://nmap.org ) at 2020-03-19 07:48 HDT
Nmap scan report for localhost (127.0.0.1)
Host is up (0.0000030s latency).
Not shown: 996 closed ports
PORT     STATE SERVICE
21/tcp   open  ftp
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 0.14 seconds

```
---

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

Other Options:

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

__All ports__
```console
nmap -p- localhost
```

__Port range__
```console
nmap -p 0-65535 localhost
```


__No port scanning__ (to check if the host is up)

```console
root@root:~# nmap 127.0.0.1-5 -sn 
```
```console
Starting Nmap 7.70 ( https://nmap.org ) at 2020-03-20 01:35 HDT
mass_dns: warning: Unable to determine any DNS servers. Reverse DNS is disabled. Try using --system-dns or specify valid servers with --dns-servers
Nmap scan report for localhost (127.0.0.1)
Host is up.
Nmap scan report for 127.0.0.2
Host is up.
Nmap scan report for 127.0.0.3
Host is up.
Nmap scan report for 127.0.0.4
Host is up.
Nmap scan report for 127.0.0.5
Host is up.
Nmap done: 10 IP addresses (10 hosts up) scanned in 0.00 seconds

```
---

__Use No ping in Detection__

```console
root@root:~# nmap -Pn 127.0.0.1

```
```console
Starting Nmap 7.70 ( https://nmap.org ) at 2020-03-20 01:45 HDT
Nmap scan report for localhost (127.0.0.1)
Host is up (0.0000040s latency).
Not shown: 996 closed ports
PORT     STATE SERVICE
21/tcp   open  ftp
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql

Nmap done: 1 IP address (1 host up) scanned in 0.11 seconds

```
---





__ __

```console
```
```console
```
---




__ __

```console
```
```console
```
---


__ __

```console
```
```console
```
---


__ __

```console
```
```console
```
---


__ __

```console
```
```console
```
---


__ __

```console
```
```console
```
---


__ __

```console
```
```console
```
---
