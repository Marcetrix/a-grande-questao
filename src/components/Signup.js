import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import { getLeaderBoardData } from "./background/Background_Services";
import Leaderboard from "./Leaderboards";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "../styles/general_styles.css";
import "../styles/home_styles.css";
import { auth } from "./Auth/firebase";


const Signup = ({ BackButton }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const signUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth ,email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="center-login-box">
      <div className="login-box">
        <h2>Signup</h2>
        <form submit={signUp}>
          <div className="user-box">
            <input
              type="text"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label>Confirm Password</label>
          </div>
          <div className="button-container">
            <button type="submit" onClick={signUp}>
              Signup
            </button>
            <button type="button" onClick={BackButton}>
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function doSignup(){
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let confirmPassword = document.getElementById("confirmPassword").value

  if (password.value == confirmPassword.value) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  } else {
      
  }
}


export default Signup;
