import React from "react";
import { addUserToLeaderBoard } from "./background/Background_Services";

import "../styles/general_styles.css"
import "../styles/finish_screen_styles.css"

function FinishScreen () {

    var score = 0;
    var name = "Marcuss";

    return (
        <div>
            <h1 className="header"><i class="fa-solid fa-party-horn"/>Parabéns</h1>
            <div className="center">
            <h1 id="score">Pontuação: 1700</h1>
            <h3>Informe seu nome:</h3>
            <input className="name" maxLength={10}></input><br/>
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