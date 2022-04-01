import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLy2zS1iJAnfPypXg-XgX-bm16ZcMfPyI",
    authDomain: "budget-tr.firebaseapp.com",
    projectId: "budget-tr",
    storageBucket: "budget-tr.appspot.com",
    messagingSenderId: "489199638423",
    appId: "1:489199638423:web:fbd5641531f876e93356d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
