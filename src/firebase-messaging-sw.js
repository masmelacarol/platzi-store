// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyCMSoRfnVB2dY-ypC-TBntqFUzD1em9Phk',
  authDomain: 'platzi-store-pwa-master.firebaseapp.com',
  databaseURL: 'https://platzi-store-pwa-master.firebaseio.com',
  projectId: 'platzi-store-pwa-master',
  storageBucket: 'platzi-store-pwa-master.appspot.com',
  messagingSenderId: '602110461240',
  appId: '1:602110461240:web:e6a2ba7711c7161dd4edcd',
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
