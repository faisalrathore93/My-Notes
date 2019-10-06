npm
===

npm is an commond line utility to install node js packages on System. 

Syntax:
npm install <package_name>

Example:
npm install express

For example you want to install express package on your system.


package json
============
Package.json is used to keep track of your project and project dependencies. Here is how it practically works

1-npm init                                  ---     Initiates the project
  
    Now After this enter the accurate information for the package
    
2-npm install express -save                 ---      This will install express package and will add an record in package.json
                                                     so if the project is exported to any other developer. He can install the 
                                                     dependenceies from the package.json
                                                     
3-cd /project_folder
  ls  
    app.js script.js package.json         --- package.json should be on same folder
  
  $npm install 
        This will automatically install all the dependencies mentioned in the package.json
        
