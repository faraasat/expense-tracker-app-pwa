importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyC9xm8eAdh-E2VguiWW1mzo9m16yafHTXM",
  authDomain: "expensify-pwa.firebaseapp.com",
  projectId: "expensify-pwa",
  storageBucket: "expensify-pwa.appspot.com",
  messagingSenderId: "233728622056",
  appId: "1:233728622056:web:c7efbfc85d91b47c4eb85d",
});

firebase.messaging();
