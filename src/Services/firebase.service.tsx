import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9xm8eAdh-E2VguiWW1mzo9m16yafHTXM",
  authDomain: "expensify-pwa.firebaseapp.com",
  projectId: "expensify-pwa",
  storageBucket: "expensify-pwa.appspot.com",
  messagingSenderId: "233728622056",
  appId: "1:233728622056:web:c7efbfc85d91b47c4eb85d",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export async function initNotifications() {
  await Notification.requestPermission()
    .then((permission: string) => {
      if (permission === "granted") {
        messaging.getToken().then((currentToken) => {
          if (currentToken) {
            console.log("🥰 Thanks For Allowing our notifications!!");
            console.log("TOKEN => ", currentToken);
          } else {
            console.log(
              "😢 Oops! no registration token available. Request permission to generate one."
            );
          }
        });
      }
    })
    .catch((err) => {
      console.log("🥴 An error occurred while retrieving token. ", err);
    });
}
