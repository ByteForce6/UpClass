import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDataConnect } from "firebase/data-connect";

import { connectorConfig, dataConnectSettings } from "./src/dataconnect-generated";

const firebaseConfig = {
  apiKey: "AIzaSyBE2rzLxCbQUcAVKMN-9vmPvEeIYibs8K8",
  authDomain: "upclass-78c13.firebaseapp.com",
  projectId: "upclass-78c13",
  storageBucket: "upclass-78c13.firebasestorage.app",
  messagingSenderId: "745506010923",
  appId: "1:745506010923:web:18d424cad7d96d0998776e",
  measurementId: "G-X8SS7P1R6C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize analytics only in the browser (avoids server-side errors and unused var)
if (typeof window !== "undefined") {
  getAnalytics(app);
}

// Firestore instance
export const firestore = getFirestore(app);

// Data Connect GraphQL client
export const dataConnect = getDataConnect(connectorConfig, dataConnectSettings);
