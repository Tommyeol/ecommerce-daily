import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuznv5E-ONAeS0zWoZzYN_-yWTEngOKUs",
  authDomain: "ecommerce-daily.firebaseapp.com",
  projectId: "ecommerce-daily",
  storageBucket: "ecommerce-daily.appspot.com",
  messagingSenderId: "826865521656",
  appId: "1:826865521656:web:8cb931ddc1207bf4fbbc0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
