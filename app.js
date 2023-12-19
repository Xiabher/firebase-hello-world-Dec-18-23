
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0I8pu8Pp-P9rRNrXgkOl-JwHzFj0o0i8",
  authDomain: "fir-hello-world-18-dec-23.firebaseapp.com",
  projectId: "fir-hello-world-18-dec-23",
  storageBucket: "fir-hello-world-18-dec-23.appspot.com",
  messagingSenderId: "686823177499",
  appId: "1:686823177499:web:501e4e9f96aa96f7f1a7be"
};

// Initialize Firebase


firebase.initializeApp(firebaseConfig);

console.log("Firebase is initialized!");

// Simple Express.js server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});