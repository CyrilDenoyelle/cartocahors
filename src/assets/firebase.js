import { initializeApp } from 'firebase';


const app = initializeApp({
    apiKey: "AIzaSyA39VfIN8mgXWa0z1w4MHkeDKyZhVsOfJw",
    authDomain: "saint-go.firebaseapp.com",
    databaseURL: "https://saint-go.firebaseio.com",
    projectId: "saint-go",
    storageBucket: "",
    messagingSenderId: "1012609470147"
  })


  export const db = app.database();
export const veillesRef = db.ref('veilles');