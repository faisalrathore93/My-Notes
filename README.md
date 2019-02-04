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

# Analysing AndroidManifest.xml

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










# Analysing DEX files

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

Or You can use 010 Editor and use the DEX templet to decode the classes.dex files

```
- 
- 
- 

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

# Logs In Android

Android Apps can store Sensitive information in the logs which can be Accessed by other apps.

## How to Find Log based Bugs

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

# Reverse Engineering the APP

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
 
 
 # Testing Content Providers
 
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


Finding Attack surface:
```
run app.package.attacksurface com.package.name
```


Getting All content Providers
```
run app.provider.finduri com.package.name
```


Accessing the content Providers
```
run app.provider.query content://uri
```

Checking Directory traversal
```
run app.provider.query content://uri../../../../secret.txt
```

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








# Bugs
### Weak Traffic Over HTTP
```
Check if App is sending any sensitive info over HTTP
```

### Leaks in Logs
```
Check if App Is leaking any Data in Logs
```

### Source code
```
Check if Code can be decompiled 
Check if There is any API Key or Sensitive iformation in Source Code
```

### Leaking Content Providers
```
Check if content providers are accessable to other apps
```

### Directory Traversal 
```
Check if app has read file system permission
Check if its vulnerable to Directory traversal
run app.provider.query content://uri../../../../secret.txt
```

### Secured Content Provided without Permission
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

