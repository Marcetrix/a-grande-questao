import React from "react";

import "../styles/general_styles.css";
import "../styles/home_styles.css";

const BaseComponent = ({ switchToRegisterComponent, switchToLoginComponent }) => {
  return (
    <div className="center">
      <div className="start-options-container">
        <button className="standard-button start-buttons" onClick={switchToLoginComponent}>
          Login
        </button>
        <button className="standard-button start-buttons" onClick={switchToRegisterComponent}>
          Register
        </button>
      </div>
    </div>
  );
}

export default BaseComponent;
