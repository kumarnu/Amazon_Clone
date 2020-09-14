# Amazon_Clone (React, Node.js, Firebase, Express, Cors,Axios, REDUX, Context API, NoSQL)
## Amazon Shopping Website Clone using Full-Stack Development
[Website Link](https://clone-23ff5.web.app/)

The description includes the details about the payment gateway installation as well as the details that has been developed using Stripe. 

<br/> $ npm start => to run the application on the server localhost:3000 OR 10.1.10.74:3000 (3000 is the default PORT)
<br/> $ sudo npm install -g firebase-tools // integrate app with firebase cloud

## Libraries for imports
<br/> $ npm install @material-ui/core
<br/> $ npm install @material-ui/icons
<br/> $ npm install react-router-dom // install for page navigation
<br/> $ npm i react-currency-format
<br/> $ npm install moment // not required for build, just for date stamps. Prerequisites for Context API
<br/> $ npm i axios // fetching library for APIs

## For Payment Gateway (Select Blaze Plan on firebase)
<br/> $ npm install @stripe/stripe-js
<br/> $ npm install @stripe/react-stripe-js

## Backend Cloud Functions
<br/> $ cd functions // Backend folder
<br/> $ sudo npm i express
<br/> $ sudo npm i cors
<br/> $ sudo npm i stripe

<br/> $ sudo firebase init
1. select Firestore
1. Deploy rules and create indexes for Firestore
1. select JavaScript
1. select yes
1. Do you want to install dependencies with npm now? (Y/n)y
<br/> $ sudo firebase emulators:start --only firestore // to deply backend and generate global API url

<br/> You will get API url 

1. Setting up firebase database
1. Goto cloud firestore from develop options
1. Create database->test mode
1. Set the location(any)


<br/> //To deploy on firebase
<br/> $ sudo firebase login
<br/> $ sudo firebase init , and then select hosting projects
<br/> What do you want to use as your public directory? (public) build
<br/> Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
<br/> $ npm run build // create optimization build. Once we make any changes to the project, we need to run this command again.
<br/> $ sudo firebase deploy // this will deploy on the firebase and generate a deployable link
