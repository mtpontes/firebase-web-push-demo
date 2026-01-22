# Firebase Cloud Messaging (FCM) Client

This project is a simple web client to demonstrate and test receiving push notifications using Firebase Cloud Messaging (FCM). It was built with Vite and Firebase JS SDK.

## Features

- **Generate Registration Token**: Obtains the FCM token for the current device, required to send notifications.
- **Receive Notifications**:
  - **Foreground**: Displays the message directly on the page when the app is open.
  - **Background**: Displays a system notification via Service Worker (`firebase-messaging-sw.js`).

## Prerequisites

- Node.js installed (version 14+ recommended).
- Browser with Push API support (Chrome, Firefox, Edge, etc.).

## Setup

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

## How to Run

To start the development server:

```bash
npm run dev
```

The application will generally be available at `http://localhost:5173`.

## Usage

1. Open the application in your browser.
2. Click the "Request Permission" button (if available) or wait for the notification permission prompt.
3. Allow notifications in your browser.
4. Copy the "Token" displayed on the screen.
5. Use the Firebase Console or an API testing tool (like Postman/cURL) to send a notification to this token.

### File Structure

- `main.js`: Main application logic, Firebase initialization, and foreground message handler (`onMessage`).
- `firebase-messaging-sw.js`: Service Worker to handle background messages.
- `index.html`: HTML structure of the page.
- `README.pt-br.md`: Portuguese version of this documentation.
