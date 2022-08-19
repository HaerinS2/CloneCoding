import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: proccess.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: proccess.env.REACT_APP_DATABASE_URL,
  projectId: proccess.env.REACT_APP_PROJECT_ID,
  storageBucket: proccess.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: proccess.env.REACT_APP_MESSAGING_ID,
  appId: proccess.env.REACT_APP_APP_ID,
  measurementId: proccess.env.REACT_APP_MEASURE_I
};

const app = initializeApp(firebaseConfig);
export default app;