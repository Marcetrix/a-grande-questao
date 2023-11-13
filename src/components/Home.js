import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import { getLeaderBoardData } from "./background/Background_Services";
import Leaderboard from "./Leaderboards";
import Login from "./Login"
import Signup from "./Signup"
import ResetPassword from "./ResetPassword";
import BaseComponent from "./BaseComponent";
import AuthDetails from "./Auth/AuthDetails";

import "../styles/general_styles.css";
import "../styles/home_styles.css";


function Home() {
  const [isOpen, setIsOpen] = useState(false);
  let user = AuthDetails

  console.log(user)
  
    setTimeout(() => {
      //const LeaderBoardData = getLeaderBoardData();
      //console.log(LeaderBoardData);
    }, 8000);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [currentComponent, setCurrentComponent] = useState('base');

  const switchToBaseComponent = () => {
    setCurrentComponent('base');
  };

  const switchToLoginComponent = () => {
    setCurrentComponent('login');
  };

  const switchToRegisterComponent = () => {
    setCurrentComponent('register');
  };

  const switchToResetPasswordComponent = () => {
    setCurrentComponent('resetPassword');
  };

  let content = <Login BackButton={switchToBaseComponent} />

  if (currentComponent === 'login') {
    content = <Login BackButton={switchToBaseComponent} switchToResetPasswordComponent={switchToResetPasswordComponent} />
  } else if (currentComponent === 'register') {
    content = <Signup BackButton={switchToBaseComponent} />
  } else if (currentComponent === 'resetPassword') {
    content = <ResetPassword BackButton={switchToBaseComponent} />
  } else {
    content = <BaseComponent switchToRegisterComponent={switchToRegisterComponent} switchToLoginComponent={switchToLoginComponent} />
  }

  return (
    <div className="center">
      <h1 className="title">A GRANDE QUESTÃO</h1>
      <div className="start-options-container">
        {content}
      </div>
    </div>
  );
}


export default Home;
