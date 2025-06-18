# Firebase Setup Guide

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter your project name (e.g., "Alch3mistMobileApp")
4. Accept the terms and conditions
5. Skip Google Analytics if you don't want it

## Add Android App

1. Click "Add app" > "Android"
2. Register your app:
   - Package name: com.alch3mistmobileapp
   - App nickname: Alch3mist Mobile App
3. Download the `google-services.json` file and place it in your project's root directory

## Add iOS App

1. Click "Add app" > "iOS"
2. Register your app:
   - Bundle ID: com.alch3mistmobileapp
   - App nickname: Alch3mist Mobile App
3. Download the `GoogleService-Info.plist` file and place it in your project's root directory

## Enable Authentication

1. In Firebase Console, go to "Authentication" > "Sign-in method"
2. Enable "Email/Password" authentication
3. Enable "Anonymous" authentication (optional)

## Get Configuration

1. In Firebase Console, click the gear icon next to "Project Overview"
2. Click "Project settings"
3. In the "Your apps" section, click the Android app
4. Copy the configuration object:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Update firebase.ts

Replace the placeholder values in your `src/firebase.ts` file with your actual Firebase configuration values.

## Install Required Dependencies

Run these commands:
```bash
yarn add firebase
yarn add -D @types/firebase
```

## Testing

1. Start your app with `yarn start`
2. The app should now:
   - Show loading screen on startup
   - Navigate to Login screen if not logged in
   - Navigate to Main screen if logged in
   - Allow email/password login
