 Cron Jobs
=========


#### Listing Cron Jobs

```
crontab -l
```

#### Editing Crontab config file

```
crontab -e
```

#### Remove all crontabs

```
crontab -r
```


#### Paths for Cronjobs

If you will normally look at your environment variable `$PATH` it will be like `/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/root/go/bin/:/usr/lib/jvm/default-java/bin` 

But During Running the cronjobs you will Find `$PATH` has only `/usr/bin:/bin` in it.

And similarly Cron jobs are executed using `/bin/sh` not the `/bin/bash'


#### Using Environment Variables in Cron Jobs
__Normally__
```
$ crontab -e

* * * * * * echo $PATH > /root/Desktop/aaaaaa.txt
* * * * * echo $SHELL >> /root/Desktop/aaaaaa.txt


Output:
=====
$ cat /root/Desktop/aaaaaa.txt

/usr/bin:/bin
/bin/sh

```
__With new Varibales__
```
$ crontab -e

PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/root/go/bin/:/usr/lib/jvm/default-java/bin
* * * * * echo $PATH > /root/Desktop/aaaaaa.txt
* * * * * echo $SHELL >> /root/Desktop/aaaaaa.txt


$ cat /root/Desktop/aaaaaa.txt
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/root/go/bin/:/usr/lib/jvm/default-java/bin
/bin/sh

```



### System Wide Crontab

can be used to run cron jobs for specific users

```
$ nano /etc/crontabs

```


### cron.allow files
```
touch /etc/cron.allow 


You can speicify the users inside the file which are allowed to use the files
```




### cron.deny files
```
touch /etc/cron.deny 


You can speicify the users inside the file which are not allowed to use the files
```





## Examples:

#### Every Minute
```
* * * * * command

Each Minute
Each Hour
Each day
Eacho Month
Each DOW
```

#### Every 3 minutes
```
*/3 * * * * command

Sequence for Minute will be 3 6 9 12 ...
Each Hour
Each day
Eacho Month
Each DOW
```

#### On Paticular Minute
```
21 * * * * command


On 21 minute
Each Hour
Each day
Eacho Month
Each DOW
```
#### Every 3 Hours
```
* */3 * * * command

Sequence for Minute will be 3 6 9 12 ...
Each Hour
Each day
Eacho Month
Each DOW
```

