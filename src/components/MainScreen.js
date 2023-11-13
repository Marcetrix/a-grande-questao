import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./Popup";
import { getLeaderBoardData } from "./background/Background_Services";
import Leaderboard from "./Leaderboards";
import NavBar from "./NavBar.js";

import "../styles/general_styles.css";
import "../styles/main_screen_styles.css";

function MainScreen() {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const goToGame = () =>{
    navigate('/Game')
  }

  const goToLeaderBoards = () =>{
    navigate('/LeaderBoards')
  }

  const goToArchievements = () =>{
    navigate('/Archievements')
  }

  return (
    <div className="main-screen">
      <NavBar showBackButton={false} showLogoutButton={true}/>
    <div className="center">
      <div className="start-options-container">
        <div className="center">
            <div className="start-options-container">
                <button className="standard-button start-buttons" onClick={() => goToGame()}>
                    Jogar
                </button>
                <button className="standard-button start-buttons" onClick={() => goToLeaderBoards()}>
                    Placar
                </button>
                <button className="standard-button start-buttons" onClick={() => goToArchievements()}>
                    Conquistas
                </button>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MainScreen;
