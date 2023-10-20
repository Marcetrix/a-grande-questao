import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmL4HE1y3EQGpQIKgccsXK9dECpCLnok4",
  authDomain: "the-great-question.firebaseapp.com",
  projectId: "the-great-question",
  storageBucket: "the-great-question.appspot.com",
  messagingSenderId: "102178962525",
  appId: "1:102178962525:web:e460822ddabbd465a361b4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

firebase.initializeApp(firebaseConfig);

export function firebaseConfigData() {
  const firebaseConfig = {
    apiKey: "AIzaSyCmL4HE1y3EQGpQIKgccsXK9dECpCLnok4",
    authDomain: "the-great-question.firebaseapp.com",
    projectId: "the-great-question",
    storageBucket: "the-great-question.appspot.com",
    messagingSenderId: "102178962525",
    appId: "1:102178962525:web:e460822ddabbd465a361b4"
  };

  return firebaseConfig
}

export async function getLeaderBoardData() {

  const firebaseRef = firebase.firestore().collection("leaderboard");

  firebaseRef.get()
  .then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("All data in 'books' collection", data); 
    return data;
  })
  ;
}

export async function addUserToLeaderBoard(name, points) {
  await setDoc(doc(db, "leaderboard", name), {
    score: points,
  });
}

export async function getQuestionsData() {
  const fbCollection = collection(db, 'questions');
  const fbDocs = await getDocs(fbCollection);
  const questionsList = fbDocs.docs.map(doc => doc.data());
  return questionsList;
}
