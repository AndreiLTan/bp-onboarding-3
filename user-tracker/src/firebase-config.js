import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


// Change this into ENV.  Dangerous to have API key out here.
const firebaseConfig = {
    apiKey: "AIzaSyBjedu2_B4eTpx6A-WxsUvFjIhtzYC-KF4",
    authDomain: "fir-tutorial-6ec7c.firebaseapp.com",
    projectId: "fir-tutorial-6ec7c",
    storageBucket: "fir-tutorial-6ec7c.appspot.com",
    messagingSenderId: "215862420679",
    appId: "1:215862420679:web:ac8d73bdbc627b6d060ae2",
    measurementId: "G-3HZR9BM7QH"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);