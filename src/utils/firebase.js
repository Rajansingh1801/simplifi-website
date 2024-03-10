import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBx3OPJyqnmOmWF0vmDyORVp9Wvet1Z1B8",
  authDomain: "everguard-health-app.firebaseapp.com",
  // databaseURL: "https://everguard-health-app-default-rtdb.firebaseio.com",
  projectId: "everguard-health-app",
  storageBucket: "everguard-health-app.appspot.com",
  messagingSenderId: "871428311953",
  appId: "1:871428311953:web:23871121e971d071446830",
  measurementId: "G-ZWY71FQV8D",
};

// to access database
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const db = getDatabase();

// const db = firebaseApp.firestore();

// const auth = firebase.auth()

const firebaseMessaging = getMessaging(app);
// console.log(app);

const fetchToken = (setTokenFound) => {
  // console.log(setTokenFound);
  // console.log(firebaseMessaging);
  return getToken(firebaseMessaging, {
    vapidKey:
      "BAK_6RGcpX0jg14q0X8iOZvSOXvUB-e8Vx1hV09faxVaG7-goA6hJnOe4xKUjZA0BdMfU-CgwDnmIOBf6qh-jAc",
  })
    .then((currentToken) => {
      if (currentToken) {
        // console.log("current token for client: ", currentToken);
        setTokenFound(currentToken);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(currentToken);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(firebaseMessaging, (payload) => {
      resolve(payload);
    });
  });
const FCM_KEY =
  "BAK_6RGcpX0jg14q0X8iOZvSOXvUB-e8Vx1hV09faxVaG7-goA6hJnOe4xKUjZA0BdMfU-CgwDnmIOBf6qh-jAc";

export { firestore, db, app, fetchToken, onMessageListener, FCM_KEY };
