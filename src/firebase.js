// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHRJL9gGwVC2oGZkQ2m_hr47buo4ckcLQ",
    authDomain: "react-etude-51ccd.firebaseapp.com",
    databaseURL: "https://react-etude-51ccd-default-rtdb.firebaseio.com",
    projectId: "react-etude-51ccd",
    storageBucket: "react-etude-51ccd.appspot.com",
    messagingSenderId: "230918704411",
    appId: "1:230918704411:web:ddfaf8d6ff04e4f9fa97be",
    measurementId: "G-E2PL6YNJJG"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  //const analytics = getAnalytics(app);
  
  export { db };