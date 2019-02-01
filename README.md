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

