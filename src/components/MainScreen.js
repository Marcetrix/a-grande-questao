import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./Popup";
import { getLeaderBoardData } from "./background/Background_Services";
import Leaderboard from "./Leaderboards";
import Login from "./Login"
import Signup from "./Signup"
import BaseComponent from "./BaseComponent";

import "../styles/general_styles.css";
import "../styles/home_styles.css";


function Home() {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);
  
    setTimeout(() => {
      const LeaderBoardData = getLeaderBoardData();
      console.log(LeaderBoardData);
    }, 8000);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="center">
      <h1 className="header">A GRANDE QUESTÃO</h1>
      <div className="start-options-container">
        <div className="center">
            <div className="start-options-container">
                <button className="standard-button start-buttons" onClick={navigate('/Game')}>
                    Play
                </button>
                <button className="standard-button start-buttons" onClick={navigate('/LeaderBoards')}>
                    LeaderBoards
                </button>
                <button className="standard-button start-buttons" onClick={navigate('/Archievements')}>
                    Archievements
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
