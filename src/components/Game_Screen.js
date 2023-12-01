import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import axios from "axios";

import "../styles/general_styles.css";
import "../styles/game_screen_styles.css";
import { getQuestionsData } from "./background/Background_Services";
import FinishScreen from "./FinishScreen";
import NavBar from "./NavBar.js";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    //disableButtons(null);
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
  const [countDownKey, setCountDownKey] = useState(0);

  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [allPossibleAnswers, setAllPossibleAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [triviaQuestion, setTriviaQuestion] = useState([]);
  const [currentPoints, setCurrentPoints] = useState(0);

  const [clockDelay, setClockDelay] = useState(0);
  const [clockDuration, setClockDuration] = useState(15);
  const [clockWillRepeat, setClockWillRepeat] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  async function combineAllAnswers(incorrectAnswers, correctAnswer) {
    let allAnswers = [];
    incorrectAnswers.map((item) => {
      item.incorrect_answers.map((incorrectAnswer) => {
        allAnswers.push({ answer: incorrectAnswer, isCorrect: false });
      });
    });
    console.log(allAnswers + "####");
    allAnswers.push({ answer: correctAnswer, isCorrect: true });
    allAnswers.sort(() => Math.random() - 0.5);
    setAllPossibleAnswers(allAnswers);
  }

  async function getTriviaData() {
    const triviaCategories = ["17", "18", "19", "21", "22", "23", "24", "25", "27" ]
    const selectedCategoryIndex = Math.floor(Math.random() * triviaCategories.length)
    const resp = await axios.get("https://opentdb.com/api.php?amount=1&category=" + triviaCategories[selectedCategoryIndex]);

    await combineAllAnswers(
      resp.data.results,
      resp.data.results[0].correct_answer
    );
    setTriviaQuestion(resp.data.results);
    setCorrectAnswer(resp.data.results[0].correct_answer);
  }

  useEffect(() => {
    getTriviaData();
  }, []);

  function verifyAnswer(selectedAnswer, timeLeft) {
    if (selectedAnswer === correctAnswer) {
      getTriviaData();
      setCurrentPoints(currentPoints + 10 * timeLeft);
    } else {
    }
  }

  function removeCharacters(question) {
    return question
      .replace(/(&quot\;)/g, '"')
      .replace(/(&rsquo\;)/g, '"')
      .replace(/(&#039\;)/g, "'")
      .replace(/(&amp\;)/g, '"');
  }

  function createAnswerButton (answer, index) {
    let button = (
      <button key={index} id={"answer-" + (index + 1).toString()} className={"standard-button answer-options answer-" + (index + 1).toString()} onClick={() => {setCountDownKey((prevKey) => prevKey + 1);shouldFinishGame(); }}>{removeCharacters(answer.answer)}</button>
    );

    return button;
  }

  function setClockConfig() {
    if (questionsAnswered == 10) {
      setClockWillRepeat(false);
    } else {
      if (clockDuration == 5) {
        setClockDelay(0);
        setClockDuration(15);
      } else {
        setClockDelay(0);
        setClockDuration(5);
      }
    }
  }

  const onClockComplete = () => {
    setClockConfig();
    return [true, 0];
  };

  return (
    <div className="">
      <NavBar showBackButton={true} showLogoutButton={false} />
      <div className="center-game">
        <h1 className="header-game">Score: 720</h1>
        {triviaQuestion.map((triviaData, index) => (
          <h1>{removeCharacters(triviaData.question)}</h1>
        ))}
        <div className="timer-wrapper">
          <CountdownCircleTimer
            key={countDownKey}
            isPlaying
            duration={clockDuration}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[11, 7, 3, 0]}
            onComplete={() => [onClockComplete]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        <div className="">
          {triviaQuestion.map((triviaData, index) => (
            <div key={index}>
              <div key={"row1"} className="row">
                {allPossibleAnswers.map((answer, index) => {
                  return index < 2 && createAnswerButton(answer, index);
                })}
              </div>
              <div key={"row2"} className="row">
                {allPossibleAnswers.map((answer, index) => {
                  return index >= 2 && createAnswerButton(answer, index);
                })}
              </div>
            </div>
          ))}

          <h3 id="right" hidden>
            Errou!
          </h3>
          <h3 id="wrong" hidden>
            Acertou!
          </h3>
          <h3 id="timeout" hidden>
            Seu Tempo Acabou!
          </h3>
          <button onClick={() => togglePopup()} className="game-screen-buttons">
            Next Question
          </button>
          {isOpen && (
            <Popup content={<FinishScreen />} handleClose={togglePopup} />
          )}
        </div>
      </div>
    </div>
  );

  function checkAnswer(isCorrect) {
    if (isCorrect) {
    } else {
    }

    if (questionsAnswered) {
      FinishScreen();
    } else {
    }
  }

  function prepareNextQuestion() {}

  function shouldFinishGame() {
    if (questionsAnswered == 10) {
      togglePopup()
    } else {
      let answer1 = document.getElementById("answer-1");
      let answer2 = document.getElementById("answer-2");
      let answer3 = document.getElementById("answer-3");
      let answer4 = document.getElementById("answer-4");

      setQuestionsAnswered(questionsAnswered + 1);
      setCountDownKey((countDownKey) => countDownKey + 1);

      let text1 = document.getElementById("timeout");
      let text2 = document.getElementById("right");
      let text3 = document.getElementById("wrong");
      text1.style.display = "none";
      text2.style.display = "none";
      text3.style.display = "none";
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
      let text = document.getElementById("right");
      text.style.display = "block";
    } else {
      answer.classList.add("disabled-answer");
      let text = document.getElementById("wrong");
      text.style.display = "block";
    }
  } else {
    let text = document.getElementById("timeout");
    text.style.display = "block";
  }
}

export default GameScreen;
