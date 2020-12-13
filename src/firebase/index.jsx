import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBK1-uG72VMpPbaWFLjxENjHuGq0_EDR-g",
  authDomain: "coderhouse-react-pfinal.firebaseapp.com",
  projectId: "coderhouse-react-pfinal",
  storageBucket: "coderhouse-react-pfinal.appspot.com",
  messagingSenderId: "117881363786",
  appId: "1:117881363786:web:79b442d278de362c0ff5b3",
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
