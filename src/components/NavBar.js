import React, { useState } from "react";
import Sound from "react-sound";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import BackgroundMusic from "./background/Background_Music";
import { ReactComponent as VolumeMutedIcon } from "./resources/Imgs/Mute_Icon.svg";
import { ReactComponent as VolumeIcon } from "./resources/Imgs/Speaker_Icon.svg";

import "../styles/nav_bar_styles.css";

var isEnabled = false;
var playStatus = Sound.status.STOPPED;
var icon = faVolumeXmark;

function NavBar() {
  return (
    <div className="row">
      <div className="column-left">
        <nav>
          <Link to={"/"}>
            <FontAwesomeIcon className="icon" icon={faHouse} />
          </Link>
        </nav>
      </div>
      <div className="column-right">
        <a onClick={() => changeIcon()}>
          <VolumeMutedIcon className="icon" />
        </a>
      </div>
      <BackgroundMusic playStatus={playStatus} />
    </div>
  );

  function changeIcon() {
    if (isEnabled) {
      playStatus = Sound.status.STOPPED;
    } else {
      playStatus = Sound.status.PLAYING;
    }
    isEnabled = !isEnabled;
  }

  return <BackgroundMusic playStatus={playStatus} />;
}

export default NavBar;
