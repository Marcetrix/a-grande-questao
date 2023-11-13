import React, { useState } from "react";
import Sound from "react-sound";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import BackButton from "./resources/Imgs/Back-Button.svg";
import userSignOut from './Auth/AuthDetails'
import AuthDetails from './Auth/AuthDetails'

import "../styles/nav_bar_styles.css";
import { AppBar, Box, IconButton, Toolbar, Typography, Button } from "@mui/material";

  const NavBar = ({ showBackButton, showLogoutButton }) => {
    const navigate = useNavigate()
    let auth = AuthDetails

    console.log(AuthDetails)

    const doLogOut = (e) => {
      userSignOut();
      navigate('/Home');
    }

    const goToMainScreen = () =>{
      navigate('/MainScreen')
    }
  
    return (
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', height: 90}}>
        <Toolbar sx={{ justifyContent: "space-between" }} className="toolbar"> 
          <IconButton id="backbutton" style={{borderRadius: 0, width: 30}} onClick={() => goToMainScreen()}>
            {showBackButton ? <img className="back-button" src={BackButton}/> : null} 
          </IconButton>
          <Typography >
            <h6 className="title-navbar">A GRANDE QUESTÃO</h6>
          </Typography>
          <Typography id="logout" onClick={() => doLogOut()}> 
            {showLogoutButton ? <h6 className="logout" ><a>LOGOUT</a></h6> : null} 
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default NavBar;
