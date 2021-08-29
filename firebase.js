const firebaseConfig = {
    apiKey: "AIzaSyDSVYQHkcUg86MrgVnwq5PfVWTOrHkh7M0",
    authDomain: "to-do-list-aea2d.firebaseapp.com",
    projectId: "to-do-list-aea2d",
    storageBucket: "to-do-list-aea2d.appspot.com",
    messagingSenderId: "696415681142",
    appId: "1:696415681142:web:6b3c14c41f913e7061bd57",
    measurementId: "G-8J2XTMPTTP"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();