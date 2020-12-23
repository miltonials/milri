var firebaseConfig = {
  apiKey: "AIzaSyAyTZXcLqghtye_9eoOqZ7AEA2c_kFn3F8",
  authDomain: "milri-cr.firebaseapp.com",
  databaseURL: "https://milri-cr.firebaseio.com",
  projectId: "milri-cr",
  storageBucket: "milri-cr.appspot.com",
  messagingSenderId: "767809616793",
  appId: "1:767809616793:web:6362f163806c80eb46b108",
  measurementId: "G-733HDXC14G",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();
const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => {
    console.log("Have permissions");
    return messaging.getToken();
  })
  .then((token) => {
    console.log(`Token: ${token}`);
  })
  .catch((error) => {
    console.log(`Error => ${error}`);
  });

messaging.onMessage((payload) => {
  console.log("On message: ", payload);
});
