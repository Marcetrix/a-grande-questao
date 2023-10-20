import React, { useState } from "react";
import Popup from "./Popup";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "../styles/general_styles.css";
import "../styles/game_screen_styles.css";
import { getQuestionsData } from "./background/Background_Services";
import FinishScreen from "./FinishScreen";

var questionCount = 1;

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    disableButtons(null);
    return <div className="timer">Acabou o tempo</div>;
  }

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

function GameScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const questions = getQuestionsData();
  console.log(questions)
  const [countDownKey, setCountDownKey] = useState(0);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="center-game">
      <h1 className="header-game">Score: 720</h1>
      <h1>De quem é a famosa frase “Penso, logo existo”?</h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={countDownKey}
          isPlaying
          duration={5}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 30 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className="">
        <div className="row">
          <button id="answer-1" className="standard-button answer-options answer-1">
          Platão
          </button>
          <button id="answer-2" className="standard-button answer-options answer-2">
          Galileu Galilei
          </button>
        </div>
        <div className="row">
          <button id="answer-3" className="standard-button answer-options answer-3">
          Sócrates
          </button>
          <button id="answer-4" className="standard-button answer-options answer-4">
          Descartes
          </button>
        </div>

        <h3 id="right" hidden>Errou!</h3>
        <h3 id="wrong" hidden>Acertou!</h3>
        <h3 id="timeout" hidden>Seu Tempo Acabou!</h3>
        <button onClick={() => togglePopup()} className="game-screen-buttons">Next Question</button>
        {isOpen && (
          <Popup content={<FinishScreen/>} handleClose={togglePopup} />
        )}
      </div>
    </div>
  );

  function shouldShowFinish() {
    if (questionCount == 10) {
      FinishScreen();
    } else {
      let answer1 = document.getElementById("answer-1");
      let answer2 = document.getElementById("answer-2");
      let answer3 = document.getElementById("answer-3");
      let answer4 = document.getElementById("answer-4");

      questionCount = questionCount + 1;
      setCountDownKey((countDownKey) => countDownKey + 1);

      let text1 = document.getElementById("timeout")
      let text2 = document.getElementById("right")
      let text3 = document.getElementById("wrong")
      text1.style.display = "none"
      text2.style.display = "none"
      text3.style.display = "none"
    }
  }
}

function disableButtons(elementId) {
  let answer1 = document.getElementById("answer-1");
  let answer2 = document.getElementById("answer-2");
  let answer3 = document.getElementById("answer-3");
  let answer4 = document.getElementById("answer-4");

  answer1.classList.add("disabled-answer");
  answer2.classList.add("disabled-answer");
  answer3.classList.add("disabled-answer");
  answer4.classList.add("disabled-answer");

  if (elementId != null) {
    let answer = document.getElementById("answer-1");

    if (true) {
      answer.classList.add("disabled-answer");
      let text = document.getElementById("right")
    text.style.display = "block"
    } else {
      answer.classList.add("disabled-answer");
      let text = document.getElementById("wrong")
    text.style.display = "block"
    }
  } else {
    let text = document.getElementById("timeout")
    text.style.display = "block"
  }
}

export default GameScreen;
