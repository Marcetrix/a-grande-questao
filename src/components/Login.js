import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./Popup";
import { getLeaderBoardData } from "./background/Background_Services";
import Leaderboard from "./Leaderboards";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "../styles/general_styles.css";
import "../styles/home_styles.css";
import { auth } from "./Auth/firebase";


const Login = ({ BackButton, switchToResetPasswordComponent }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth ,email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/MainScreen');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="center-login-box">
      <div className="login-box">
        <h2>Login</h2>
        <form submit={signIn}>
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
            <label>Senha</label>
          </div>
          <div className="button-container">
            <button type="submit" onClick={signIn}>
              Login
            </button>
            <button type="button" onClick={BackButton}>
              Voltar
            </button>
          </div>
        </form>
        <div class="bottom">
          <div id="forgotpassword"><a href=""onClick={switchToResetPasswordComponent}>Forgot your password?</a></div>
        </div>
      </div>
    </div>
  );
}

function doLogin(){
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
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
}


export default Login;
