import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail  } from "firebase/auth";

import "../styles/general_styles.css";
import "../styles/home_styles.css";

const ResetPassword = ({ BackButton }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  return (
    <div className="center-login-box">
      <div className="login-box">
        <h2>Reset Password</h2>
        <form submit={doReset}>
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
          <div className="button-container">
            <button type="submit" onClick={doReset}>
              Reset
            </button>
            <button type="button" onClick={BackButton}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function doReset(){
  let email = document.getElementById("email").value

  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export default ResetPassword;
