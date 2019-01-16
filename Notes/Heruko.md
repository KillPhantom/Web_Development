# Steps for setting a backend in Heroku



1. git init

2. git add . // add all the file inseide current repo

3. git commit -m

4. heroku create // type in your username and password

5. Add /start" : "node app.js"/ in  json file

6. git  add package.json

7. git commit -m "add start script"

8. git push heroku master. //push to heroku. **Be sure to connect the correct database (try mongolab.com)**

   ~~~javascript
   heroku run npm install mongoose --save //run code to install the package on your server
   
   heroku run ls // run ls in heroku server
   
   heroku logs// see the error
   ~~~

9. heroku apps: rename newname