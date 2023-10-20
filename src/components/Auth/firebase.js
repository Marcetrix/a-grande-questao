import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCmL4HE1y3EQGpQIKgccsXK9dECpCLnok4",
    authDomain: "the-great-question.firebaseapp.com",
    projectId: "the-great-question",
    storageBucket: "the-great-question.appspot.com",
    messagingSenderId: "102178962525",
    appId: "1:102178962525:web:e460822ddabbd465a361b4"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);