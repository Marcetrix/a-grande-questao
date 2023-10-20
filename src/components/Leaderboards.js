import React, { useState, useEffect} from "react";
import { firebaseConfigData } from "./background/Background_Services";
import { getFirestore, collection, getDocs, setDoc, doc, QuerySnapshot } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import Flex from '@react-css/flex'
import 'firebase/compat/firestore';
import '../styles/leaderboard_styles.css'

function Leaderboard() {

    const [schools, setSchools] = useState([]);
    const leaderboardData = getLeaderBoardData();

useEffect(() => {
    getLeaderBoardData();
  }, []);

  return (
    <div className="background">
      <h1 className="header-leaderboard">Placar</h1>
      <table>
  <tr>
    <th>Posição</th>
    <th>Nome</th>
    <th>Pontuação</th>
  </tr>
  <tr>
    <td>1º</td>
    <td>Pedro</td>
    <td>1800</td>
  </tr>
  <tr>
    <td>2º</td>
    <td>Jesse</td>
    <td>1500</td>
  </tr>
  <tr>
    <td>3º</td>
    <td>Miranha</td>
    <td>1350</td>
  </tr>
  <tr>
    <td>4º</td>
    <td>Marcos</td>
    <td>1200</td>
  </tr>
  <tr>
    <td>5º</td>
    <td>Guilherme</td>
    <td>1050</td>
  </tr>
  <tr>
    <td>6º</td>
    <td>Fabio</td>
    <td>800</td>
  </tr>
  <tr>
    <td>7º</td>
    <td>Larissa</td>
    <td>700</td>
  </tr>
  <tr>
    <td>8º</td>
    <td>Eduardo</td>
    <td>600</td>
  </tr>
  <tr>
    <td>9º</td>
    <td>Robson</td>
    <td>400</td>
  </tr>
  <tr>
    <td>10º</td>
    <td>Bob</td>
    <td>0</td>
  </tr>
</table>
    </div>
  );

  /*function addPlayer() {
    var table = document.getElementById("scoreTable");
 
    var rowCount = 3;
    
    for (let i = 0; i < 10; i++) {
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= (i+1).toString + "º"
        row.insertCell(1).innerHTML= myName.value;
        row.insertCell(2).innerHTML= age.value;
    }
 
}*/



function getLeaderBoardData() {
    firebase.initializeApp(firebaseConfigData());

    const firebaseRef = firebase.firestore().collection("leaderboard");
  
    firebaseRef.onSnapshot((QuerySnapshot) => {
        const items = [];
        QuerySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        setSchools(items);
        
    })
    /*firebaseRef.get()
    .then((snapshot) => {
      const item = [];
      item.pu
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //console.log("All data in 'books' collection", data); 
      setSchools((prev) => [data, ...prev]);
    })
    ;*/
  }
}

export default Leaderboard;
