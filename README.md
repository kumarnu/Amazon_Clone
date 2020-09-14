# Amazon_Clone (React, Node.js, Firebase, Express, Cors,Axios, REDUX, Context API, NoSQL)
Amazon Shopping Website Clone using Full-Stack Development

$ npm start => to run the application on the server localhost:3000 OR 10.1.10.74:3000 (3000 is the default PORT)
$ sudo npm install -g firebase-tools // integrate app with firebase cloud

Libraries for imports
$ npm install @material-ui/core
$ npm install @material-ui/icons
$ npm install react-router-dom // install for page navigation
$ npm i react-currency-format
$ npm install moment // not required for build, just for date stamps. Prerequisites for Context API
$ npm i axios // fetching library for APIs

For Payment Gateway (Select Blaze Plan on firebase)
$ npm install @stripe/stripe-js
$ npm install @stripe/react-stripe-js

Backend
Cloud Functions
$ cd functions // Backend folder
$ sudo npm i express
$ sudo npm i cors
$ sudo npm i stripe

$ sudo firebase init
select Firestore
Deploy rules and create indexes for Firestore
select JavaScript
Y
Do you want to install dependencies with npm now? (Y/n)y
$ sudo firebase emulators:start --only firestore // to deply backend and generate global API url

You will get API url 

Setting up firebase database
Goto cloud firestore from develop options
Create database->test mode
Set the location(any)


//To deploy on firebase
$ sudo firebase login
$ sudo firebase init , and then select hosting projects
What do you want to use as your public directory? (public) build
Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
$ npm run build // create optimization build. Once we make any changes to the project, we need to run this command again.
$ sudo firebase deploy // this will deploy on the firebase and generate a deployable link
