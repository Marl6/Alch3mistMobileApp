import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBHc9XNJgruTcQUWPbH0ZhH2Odi0UfYBVU", // from api_key.current_key
    authDomain: "alch3mistmobileapp.firebaseapp.com", // typically your project_id + .firebaseapp.com
    projectId: "alch3mistmobileapp", // from project_info.project_id
    storageBucket: "alch3mistmobileapp.firebasestorage.app", // from project_info.storage_bucket
    messagingSenderId: "23378274303", // from project_info.project_number
    appId: "1:23378274303:android:cb383a6b0858bb679ee9ca" // from client.client_info.mobilesdk_app_id
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
