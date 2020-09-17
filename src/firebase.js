import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCFpS8Kw-B8qsGfaRSYG8Sq8v9y9gdlPI4",
    authDomain: "clone-23ff5.firebaseapp.com",
    databaseURL: "https://clone-23ff5.firebaseio.com",
    projectId: "clone-23ff5",
    storageBucket: "clone-23ff5.appspot.com",
    messagingSenderId: "566053134965",
    appId: "1:566053134965:web:fd3d8f6c1710008d9b0e3c",
    measurementId: "G-Z0ZJT19WPY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

