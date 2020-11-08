var firebaseConfig = {
    apiKey: "AIzaSyDA79K7UCPt16HV45LQTHATILkhsyjPe2Y",
    authDomain: "milritest.firebaseapp.com",
    databaseURL: "https://milritest.firebaseio.com",
    projectId: "milritest",
    storageBucket: "milritest.appspot.com",
    messagingSenderId: "754202976328",
    appId: "1:754202976328:web:5cc9c0f9b8e458fe95b87d",
    measurementId: "G-CECHFXCC6Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const auth = firebase.auth();
  const fs = firebase.firestore();