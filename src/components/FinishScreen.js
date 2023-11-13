import React from "react";
import { addUserToLeaderBoard } from "./background/Background_Services";

import "../styles/general_styles.css"
import "../styles/finish_screen_styles.css"

function FinishScreen () {

    var score = 1700;
    let questionsAnswered = 4;
    var name = "Marcus";

    return (
        <div>
            <h1 className="header"><i class="fa-solid fa-party-horn"/> Parabéns </h1>
            <div className="center">
            <h1 id="score">Pontuação: {score}</h1>
            <h3>Você acertou {questionsAnswered} de 10 perguntas</h3>
            <button className="button">Inicio</button>
            </div>
        </div>
    )

    var score = document.getElementById("score");
}

function transferScore() {
    addUserToLeaderBoard(this.name, this.score)
}

export default FinishScreen;