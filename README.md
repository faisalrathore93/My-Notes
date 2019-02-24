# Android-Pentesting



# Components of an Andriod apps

### Activity

Any indidual screen of an app is called an activity of an app
App can have many activities
like login,register and etc

### Services

Services are called the background processes
Anything related to app running in the background is called an service

### Intent

Intent is an componen which allows services and activities to work toghether

### Activity manager

you can send commands to activity
Pass params to activits etc 

Eg: you can say ` am start package-name ` it will start the paticular package.
Eg:  `am start -a android.intent.action.VIEW http://attify.com` will open and Browser and open attify.com


One can simply try to bypass the login and other security features but calling the authorized activities directly using
intents.

### Content Providers

Which saves/shares the data
Eg: sql,xml etc

### Shared Prefrecnces

Simple way of storing some inforamtion for the appilication 
Like GameHighScore,username and etc
Its a XML file
its inside is `shared_pref` folder

### Broadcat Receaver

Its like an event listener on an android app 
Which wait for action/event to trigger and it executes its block of code in response.

# Understanding AndroidManifest.xml

Here is an example of AndroidManifest file
```
<?xml version="1.0" encoding="utf-8" standalone="no"?><manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.aditya.webviewvuln">
    <uses-permission android:name="android.permission.INTERNET"/>
    <application android:allowBackup="true" android:icon="@drawable/ic_launcher" android:label="@string/app_name" android:theme="@style/AppTheme">
        <activity android:label="@string/app_name" android:name="com.aditya.webviewvuln.MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
    </application>
</manifest>
```
#### Permissions
The app needs only one permission that is Android
```
 <uses-permission android:name="android.permission.INTERNET"/>

```


#### < appilication >
<application> This element is used to define the beginning of an application. What's important about this
element with regards to security is its attributes and how they can affect the components
defined inside this element

```
<application android:allowBackup="true" android:icon="@drawable/ic_launcher" android:label="@string/app_name" android:theme="@style/AppTheme">
        <activity android:label="@string/app_name" android:name="com.aditya.webviewvuln.MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
    </application>
```


####  < appilication > Attributes
allowBackup -- The Full back of all is possible
icon   -- path to an Drawable Icon
label -- String to show while asking permission
```
<application android:allowBackup="true" android:icon="@drawable/ic_launcher" android:label="@string/app_name" android:theme="@style/AppTheme">

```
#### Analyze AndroidManifest.xml file for exported Activity components.
```
Find all the activities eg
<activity android:name="com.isi.testapp.Welcome" android:exported="true"></activity>
here com.isi.testapp.Welcome could be the activity
```

# Playing with Package Resources

In android All the files are located in /data/data. In these Directores You can see permissions files,databases and other
files owned by the apps by fallowing commands.


List all Packages
```
ls -al
```

list all Packages with their metedata
```
ls -alR */
```


List all packages with their databases only
```
ls -alR */databases/
```


List all packages with their Files only
```
ls -alR */files/
```


List Specific Files
```
ls –al */*/*.xml
ls –al */*/*.png
ls –al */*/*.mp3
```








# Glimps of ADB

#### Decompile an APP
```
apktool d app.apk
```

#### Building an APP
```
apktool b app.apk
```

#### Start an ADB server
```
adb start-server
```

#### Stop an ADB Server
```
adb start-server
```

#### Connect to Android Device
```
adb connect 192.168.43.101
```

#### Push a file to Android
```
adb push localfile.txt /mnt/sdcard/file.txt`
```

#### Pull a file from Android
```
adb pull /mnt/sdcard/secret.txt
```

#### Execute Commands without getting shell
```
adb shell ls /mnt/sdcard
```

#### Install APP
```
adb install app.apk
```

#### Uninstall APP
```
adb uninstall app.apk
```


#### Take Backup of An app
```
adb backup com.package.name  -f newApp.apk
```

#### Android LOGS
```
adb logcat
```

#### Get Logs of Paticular APP
```
adb ps | grep -i facebook

After Getting the PID

adb logcat | grep PID

```

# Android Package Manager [pm]

list all packages
```
pm list packages
```

Kill App
```
kill PID
```

# Android Activity Manager

Start packages
```
am start packag.name
```

Sending broadcase
```
am broadcast -a MyBroadcast -n com.isi.vul_broadcastreceiver.MyBroadCastReceiver –es number 5556.

```










# Logs In Android

Android Apps can store Sensitive information in the logs which can be Accessed by other apps.

### How to Find Log based Bugs

- Watching the Logs
- Using Source code

### Watching the Logs

One can try to see if any logs are being created with any sensitive information about the user
```
adb ps grep facebook
abd logcat | grep PID
```

### Checking The Sorce code
- Using ApkToll decompiler
- Using Jadx

```
Using APKTOOL:

apktool -d facebook.apk -d FaceBook
grep -iRn 'log.d' .


Using Jadx

jadx facebook.apk -d Facebook
grep -iRn 'log.d' .

```

# Reverse Engineering

## Reverse Engineering the APP

There are three steps in doing that

- Decompiling the APP
- Editing the Code
- Recompiling the APP


```
apktool d app.apk -d Folder1           [Will Give you smili code]
jadx d app.apk -d Folder2              [Will Give You java source code]

Understanding:
The Source code generated by jadx cannot be edit and compiled it can be only use to understand the app.

Editing:
The Smili code can be edited and re-Compiled. Back to app

Now After editing the smilie code the app can be regenerated by:

apktool b Folder2

```



## Analysing DEX files

- The DEX file have a magic Number of 035
- The DEX file is encoded into HEX

The tool called `dexdump` can be used to converting dex files

Install:
```
echo "deb http://ftp.de.debian.org/debian sid main" > /etc/apt/sources.list
apt-get update
apt-get install dexdump
```

Use:
```
dexdump -l xml classes.dex        //Will produce and xml files of classes.dex with all classes info

```


## Signing the app
```
Generating Key:
keytool -genkey -v -keystore imran.keystore -alias mubashir -keyalg RSA -keysize 2048 -validity 200
```

```
Signing the APP:
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1  -keystore imran.keystore imran.apk alias_name mubashir
```

# Intercepting The Traffic

The bugs like sending sensitive data over HTTP can be only identified when traffic is intercepted and analysed.

The traffic can be analysed by two ways
- Proxy Tools [burp]
- Using Packet Capturing Tools [tcpdump]

Using Burp to Intercept HTTP Traffic:
 ```
 - Start Proxy on All Interfaces
 - Change Proxy setting to your Listening Proxy on android device
 - Done!
 ```
Using Burp to Intercept HTTP's Traffic:
 ```
- Go to Android Device
- Open http://burp in browser
- Click Download CA cert
- Connect to Android using ADB shell
  adb connect 192.168.56.101
  adb shell
  cd /mnt/sdcard/Downloads/
  mv cacert.der cacert.crt  
- Open Android and go to
  Settings
  Security
  install from SDCARD
  Done
 ```
 
 After Performing these steps you maybe able to intercept the HTTP's Traffic.
 
 


## Using Drozer
#### Installing On PC: 
```
Building from Source
git clone https://github.com/mwrlabs/drozer/
cd drozer
python setup.py build
python setup.py install
```
#### Installing on Android
```
Download and Install on Addroid: https://github.com/mwrlabs/drozer/releases/download/2.3.4/drozer-agent-2.3.4.apk
```

#### Connecting Drozer
```
adb forward tcp:31415 tcp:31415
drozer console connect
```

Will Give you drozer shell


## Attacking App with Drozer

Listing Packages
```
run app.package.list
```

Get Permission Info of an APP
```
run app.package.info -a com.package.name
```

Find Packages with name
```
run app.package.list -f firefox
```

Find Package Info
```
run app.package.info –-package [package name]
```

Listing Activities on Your Device
```
run app.activity.info
```


Filter Activities by Name
```
run app.activity.info –f facebook
```


Filtter activities By Package Name
```
run app.activity.info –-package [package name]
```


Finding Attack surface:
```
run app.package.attacksurface com.package.name
```


Getting All content Providers
```
run app.provider.finduri com.package.name
```

Getting All Content Providers
```
run app.provider.info –a [Package Name]
```



Getting All Content Providers By Permission
```
run app.provider.info –a [Permission Label Name]
```


Accessing the content Providers
```
run app.provider.query content://uri
```



Get Running Services
```
run app.service.info –-package [package name]
```



Services Running Based on Name
```
run app.service.info –f [Filter string]
```



Enumerate BroadCast Receavers
```
run app.broadcast.info
```



Enumerate BroadCast Receavers of Any Package
```
run app.broadcast.info –a [package]
```

Launching any enumerated activity

```
run app.activity.start --action android.intent.action.MAIN --category android.intent.category.LAUNCHER --component app.packagen.name app.package.service.name

or

run app.activity.start --category android.intent.category.LAUNCHER --component app.packagen.name app.package.service.name

```


# Accessable Content Provides pathPrefix:"/"

Sometimes the Content provider can be protected by the permission but always look at the additional paremeters to check if
the app is vulnerable Ex: 

As you can see here the entire file system has access to the contents of the app.

```
<provider android:authorities="com.dropbox.andriod.dropbox" android:name".provider.DropboxProvider">
<grant-uri-permission:android:pathPrefix="/" />

```

# Backup Vulnerability

Sometime the app allows other apps to take full backup of an app. which can be exploited by hackers

Here is how to test for t
```
1
2
3
4
5
6

```



# Testing SQL Injection Bugs
Sometimes APPS can be vulnerable to SQLI injection
``
Try SQLI on Login
Try SQLI in Register
Try Intercepting Traffic and pass requets to SQLMAP to check if requests are vulnerable
``






# Debugging Android Bugs

lets setup an Insecure Bank App to Demonistrate the debugging of android app
```
git clone https://github.com/dineshshetty/Android-InsecureBankv2
pip install "cherrypy>=3.0.8,<9.0.0"
cd Insecure-Bank/InsecureBank/bin/
adb install InsecreBank.apk

Server:
cd Insecure-Bank/AndroLabServer/
python app.py
```

### using AndBug
Get PID and PACKAGE_NAME of an APP
```
adb shell ps | grep -i insecure
```

Get AndBug Shell
```
andbug shell -p PID
```


Getting All classes in APP
```
>>classes
```

Getting classes By APP
```
>> classes com.android.insecurebank
```


Getting Method of an CLASS
```
>>methods app.class.name
```

Tracing the method
```
>>method-trace com.package.name.className.methodName 
```
##### Now the problem is to set the breakpoints to the app and edit the values. This can be achieved by using ADB because AndBug doesn't support the Breakpoints

### Setting Up JDB
```
Getting Process ID of APP:

adb shell ps | grep -i insecure



forwading Ports:
adb forward tcp:1337 jdwp:PID


Attach Jdb to app:
jdb -attach localhost:1337
```

### Some JDB Commands

Tracing classes
```
>>classes
```

Tracing Methods of classes
```
>>methods com.package.name.className
```


Setting BreakPoints
```
stop in com.android.packageName.ClassName.MethodName
```

##### Editing Variables During BreakPoints

Checking Local Varibale
```
locals
```

Setting Local Varibales
```
set amount="20000"
```


Resuming the thread
```
resume
```

Calling any method during BreakPoint
```
eval dotransfer("192.168.56.1","8080","1111","2222","1000000")
```



## Attacking Services

#### Finding services 
```
run app.service.info -a com.package.name
```

#### Finding Services will null permission
This will find all the services running on your mobile with null permission
```
run app.services.info -p null
```

### TIP: 
its always good to enable log cat while playing with services just to make sure any information is not diclosed

#### Launching Services
Now as we have found the serives can be launched them by using this command [make sure logcat is running]

```
 run app.service.start –-component package.name service.name
```

##### Launching Services with their intents
if you want to send the service some data via an intent, you would need to
know what the intent filters look like for the service you are targeting. And, if you haven't
already guessed, the easiest way to know this is by inspecting the application manifest. 

Example
```
<service android:name=".authenticator. AuthenticationService" android:exported="true">   <-- Here is the service name
 <intent-filter>
 <action android:name="android.accounts.
 AccountAuthenitcator" />
 </intent-filter>
 <meta-data android:name="android. accounts.AccountAuthenticator" android:resource="@xml/authenticator" />    <--  Intent Name
</service>
```

```
dz> run app.service.start --component com.linkedin.android 
com.linkedin.android.authenticator.AuthenitactionService 
--action anroid.accounts.AccountAuthenitcator
```


# Attacking Vulnerable Broadcast Receivers

```
Getting breadcase Receavers 
- From XML file
- Using Drozer

Finding the code which handles the broadcase
- decompile the app
- identifying the parameters to be send to breadcast receaver.

Sending the broadcase

am broadcast -a MyBroadcast -n com.isi.vul_broadcastreceiver.MyBroadCastReceiver –es number 5556.

```





# Bugs

 ### Testing Content Providers
 
 - The content Providers are like an medium between an app and the data sources.
 - These needs to be searched inside the source code of an app
 - They always start with content://
 
They can be found by fallowing these steps
```
- Pull the app from the android

adb shell pm path com.android.package

- Decompile it

apktool d app.apk

- grep the content Providers

grep -iRn 'content://'

- query it

adb shell content query --url content://example
```


### Insecure Data storage

Android app can stored the users senstive information like cookies,auth_token,username&Pass and other details in shared prefrences without encryption which can lead to data theft.

```
sharedPrefs
-----------

adb shell
cd /data/data/com.package.name/sharedprefs/
Test all the files for sensitive information.


Databases
---------
Open up databases
check if you are storing information in plainText


Temporary Files
--------------
Keep and Eye on Temporary Files created 
Have a look inside them too.




External Storage
----------------
Check which file is being created/deleted by the app in external storage.
and what information is being stored by the app.

```




### Hard-coding issues
Check Source code for sensitive information about the company.
```
key=
secret=
api=
token=
cookie=
ip=
```

### Services with Null Permissions
```
run app.services.info -p null -a com.box.android

### TIP: 
its always good to enable log cat while playing with services just to make sure any information is not diclosed
```

### Launching Services with null permissions

```
 run app.service.start –-component package.name service.name
```

### Checking DOS via Null Services
```
Launch Each service and Check if you are enable to crash app By Launching that service.
```


### Weak Traffic Over HTTP
```
Open WireShark
Open APP
Set Start Intercepting on all the interfaces
Filter Traffic
Check if App is sending any sensitive info over HTTP
```

### Leaks in Logs
```
adb logcat | grep [Cc]ookie
adb logcat | grep "http[s]*"
adb logcat | grep "ftp[s]*"
adb logcat | grep [pattern]
adb logcat | grep –i "[\w\s_-]*token[\w\s_-]*"

Check if App Is leaking any Data in Logs
```

### Leaks in Logs on Hardware Events
Sometime the app will generte some logs on hardware based event so these event can be generated bu monkey extension 
in adb will will send -p [package_name]  random -v [No of event] to generate logs.

```
Start APP
Start Logcat
App Grep
adb shell monkey –p [package] –v [event count]
```

### Source code
```
Check if Code can be decompiled 
Check if There is any API Key or Sensitive iformation in Source Code
```

### Leaking Content Providers
```
Check if content providers are accessable to other apps
Find contrent Providers
grep -iRn /soruceCode/
adb shell content query --url content://asdasdasdasdasdasd

```


### Directory Traversal in Content Providers
```
Check if app has read file system permission
Check if its vulnerable to Directory traversal
run app.provider.query content://uri../../../../secret.txt
```

```
Check if the developed has forgot to add signatures to the content provides
```

#### SQLI
``
Try SQLI on Login
Try SQLI in Register
Try Intercepting Traffic and pass requets to SQLMAP to check if requests are vulnerable
``


#### Tracing method for Leaking data
```
Tarce each Intresting method to see if app is leaking any key or Any Senstive info.
```



# Resources
The Android Debug Bridge – Enabling logcat logging webpage at 
https://developer.android.com/tools/help/adb.html#logcat


The Vogella Tutorials – Monkey Testing webpage at 
http://www.vogella.com/articles/AndroidTesting/article.html

The Android Developer – logcat webpage at 
https://developer.android.com/tools/help/logcat.html



The WinGrep software at 
http://www.wingrep.com/download.htm



The Discovering a Major Security Hole in Facebook's Android SDK webpage at
http://blog.parse.com/2012/04/10/discovering-a-major-security-hole-in-facebooks-android-sdk/




The Android Developer – Reading and Writing Logs webpage at 
http://developer.android.com/tools/debugging/debugging-log.html




#More To Come

# CSIP Vulnerability

Sometimes Developers can set permissions to the content://providers but they forget to apply the signatures. Which may 
result that contetn Url can be called by other appilication and steal the APP data.

Here is How to do it.
```
1
2
3
4
5
```
