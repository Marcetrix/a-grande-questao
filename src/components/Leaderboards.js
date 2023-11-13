import React, { useState, useEffect} from "react";
import { firebaseConfigData } from "./background/Background_Services";
import { getFirestore, collection, getDocs, setDoc, doc, QuerySnapshot } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import Flex from '@react-css/flex'
import NavBar from "./NavBar.js";
import 'firebase/compat/firestore';
import '../styles/leaderboard_styles.css'

function Leaderboard() {

  const [leaderboardData, setLeaderboardData] = useState([]);

  // Assuming you have an array of objects with position, email, and score
  const sampleLeaderboardData = [
    { position: 1, email: "john.doe@example.com", score: 1000 },
    { position: 2, email: "jane.smith@example.com", score: 800 },
    { position: 3, email: "bob.jones@example.com", score: 750 },
    { position: 4, email: "alice.wang@example.com", score: 700 },
    { position: 5, email: "samuel.green@example.com", score: 650 },
    { position: 6, email: "emily.white@example.com", score: 600 },
    { position: 7, email: "michael.brown@example.com", score: 550 },
    // Add more data as needed
  ];

  useEffect(() => {
    // Fetch leaderboard data from an API or other source
    // For now, use the sample data
    setLeaderboardData(sampleLeaderboardData);
  }, []);

  return (
    <div>
      <NavBar showBackButton={true} showLogoutButton={false}/>
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Placar</h1>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Email</th>
            <th>Potuação</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((item, index) => (
            <tr key={index}>
              <td>{item.position}</td>
              <td>{item.email}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );

function getLeaderBoardData() {
    
  }
}

export default Leaderboard;
