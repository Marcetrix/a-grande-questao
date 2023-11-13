import React, { useState, useEffect} from "react";
import { firebaseConfigData } from "./background/Background_Services";
import { getFirestore, collection, getDocs, setDoc, doc, QuerySnapshot } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import Flex from '@react-css/flex'
import 'firebase/compat/firestore';
import '../styles/leaderboard_styles.css'

function Archievements() {

  return (
    <div className="center">
      <h1 className="header">A GRANDE QUESTÃO</h1>
      <div className="start-options-container">
        <div className="center">
            <div className="start-options-container">
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Archievements;
