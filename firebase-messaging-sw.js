// Give the service worker access to Firebase Messaging.
// Note: These must point to the libraries in node_modules or CDN. 
// Since we are not using a bundler for the SW specifically (unless we configure one), importing from 'firebase/app' might not work directly in browser if we just serve it.
// Standard way for simple SW without bundler is importScripts from CDN.

importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

const firebaseConfigParams = new URLSearchParams(self.location.search);
const firebaseConfig = Object.fromEntries(firebaseConfigParams);

if (Object.keys(firebaseConfig).length === 0) {
    console.warn('Firebase config missing in Service Worker URL parameters.');
}

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the background (Web app is closed or not in browser focus)
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
