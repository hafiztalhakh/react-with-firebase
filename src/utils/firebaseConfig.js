import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCf5UhsT0ehNZjYeunZP0VEV-GWmqlIheg",
  authDomain: "hafiztalhakh-practise-project.firebaseapp.com",
  projectId: "hafiztalhakh-practise-project",
  storageBucket: "hafiztalhakh-practise-project.appspot.com",
  messagingSenderId: "163265308639",
  appId: "1:163265308639:web:fd751f2b6dff3bb70c466a",
  measurementId: "G-27JL629HKE",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
