// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config

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

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
