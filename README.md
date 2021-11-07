# Tourisme Medical -
A single page web applications with many features .
Mean Stack Project Isimm Medical Tourism platform . 
Https protcol . User ( doctor, patient , hotel manager , agency manager ) Management with hashed and encrypted logins .
Material design platform .
## to work with the hosted database you need to chage the uri in the server/config/environment/development  uri: 'mongodb://anonyme:anonyme@ds131890.mlab.com:31890/medical-dev'


### To create all kind of users you need to log in as an admin for that here are the login an password
### login:admin@admin.com
### password:admin



# To test our features this are the Accounts login
## association
## login :association@isim.tn
## password : association

## hotel
## login :hotel@isim.tn
## password : hotel

## agency
## login :agency@isim.tn
## password : agency

## doctor
## login :doctor@isim.tn
## password : doctor


# Installation Instructions
## Requirements

1.  Node https://nodejs.org/en/ (To create web server)
2.  Git https://git-scm.com/ (Version Control System)
3.  MongoDB https://www.mongodb.com/ (Database)
4.  Python 2.7 https://www.python.org/downloads/release/python-2710/
5.  Install Visual C++ Build Tools using the Default Install option. npm config set python python2.7 npm config set msvs_version 2015

We need to start an instance of MongoDB. In my case it was already on so u can juste open your cmd and run

C:\Program Files\MongoDB\Server\3.4\bin>  mongod.exe --dbpath "c:\Program Files\MongoDB\Server\3.4\data"


# Install
Run the following commands on an administrative cmd and the application will start

1.    npm i -g grunt-cli 
2.    npm i -g bower
3.    npm i -g --clinicon windows-build-tools
4.    npm i
4.    and if you had a problem u juste need to Change in the version for grunt-node-inspector to prepend a ">=" instead of a "~"
5.    bower i
6.    grunt serve

# medical-platforme
