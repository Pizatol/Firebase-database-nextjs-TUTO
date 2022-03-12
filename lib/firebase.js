// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
	
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID

// 	apiKey: "AIzaSyDsTLbhEt4xlBTHe1vN9p0NtGq_sTJj_Mw",
//   authDomain: "dbtuto-2fb61.firebaseapp.com",
//   projectId: "dbtuto-2fb61",
//   storageBucket: "dbtuto-2fb61.appspot.com",
//   messagingSenderId: "755637143222",
//   appId: "1:755637143222:web:10ea637b41610387ba0817"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

