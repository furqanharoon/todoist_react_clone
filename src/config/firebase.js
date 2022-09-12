import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACk0s9Px0ng_PTxsUyicilpO99yg4A6-A",
  authDomain: "reacttodolist-4567c.firebaseapp.com",
  projectId: "reacttodolist-4567c",
  storageBucket: "reacttodolist-4567c.appspot.com",
  messagingSenderId: "540417502941",
  appId: "1:540417502941:web:3a56584e7cecf099bff534",
  measurementId: "G-N969Y7BC93",
};

export const firebase = initializeApp(firebaseConfig);
