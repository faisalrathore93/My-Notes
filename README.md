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

# Log based bugs

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
