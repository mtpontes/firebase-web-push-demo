import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// User provided config
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const tokenDisplay = document.getElementById('token-display');
const permissionBtn = document.getElementById('request-permission-btn');
const messageList = document.getElementById('message-list');

function appendMessage(payload) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message';
    msgDiv.innerHTML = `
        <strong>${payload.notification?.title || 'No Title'}</strong>: ${payload.notification?.body || 'No Body'} 
        <br>
        <pre style="background: #f4f4f4; padding: 5px; border-radius: 4px; overflow-x: auto;"><code>${JSON.stringify(payload, null, 2)}</code></pre>
    `;
    messageList.prepend(msgDiv);
}

// Handle incoming messages (foreground)
onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    appendMessage(payload);
});

async function requestPermission() {
    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            if ('serviceWorker' in navigator) {
                const swUrl = `/firebase-messaging-sw.js?${new URLSearchParams(firebaseConfig).toString()}`;
                const registration = await navigator.serviceWorker.register(swUrl);

                // Get Token
                const token = await getToken(messaging, { serviceWorkerRegistration: registration });

                if (token) {
                    tokenDisplay.textContent = token;
                    console.log('Token:', token);
                } else {
                    tokenDisplay.textContent = 'No Instance ID token available. Request permission to generate one.';
                }
            } else {
                console.error("Service workers are not supported in this browser");
            }


        } else {
            console.log('Unable to get permission to notify.');
            tokenDisplay.textContent = 'Permission denied';
        }
    } catch (err) {
        console.error('An error occurred while retrieving token. ', err);
        tokenDisplay.textContent = 'Error: ' + err.message;
    }
}

permissionBtn.addEventListener('click', requestPermission);