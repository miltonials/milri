var firebaseConfig = {
  apiKey: "AIzaSyDp63Wjiokq7DCH95-DcMNr5VVp7ex0TlI",
  authDomain: "milri-c9c17.firebaseapp.com",
  databaseURL: "https://milri-c9c17.firebaseio.com",
  projectId: "milri-c9c17",
  storageBucket: "milri-c9c17.appspot.com",
  messagingSenderId: "343408517103",
  appId: "1:343408517103:web:7ffca4fea8053ad3e9a01a",
  measurementId: "G-BNCCMW7BW0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage = firebase.storage();