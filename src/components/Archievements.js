import React, { useState, useEffect} from "react";
import { firebaseConfigData } from "./background/Background_Services";
import { getFirestore, collection, getDocs, setDoc, doc, QuerySnapshot } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import Flex from '@react-css/flex'
import 'firebase/compat/firestore';
import NavBar from "./NavBar.js";

import '../styles/archievements_styles.css'

function Archievements() {

  return (
    <div>
      <NavBar showBackButton={true} showLogoutButton={false}/>
    <div className="archievements-container">
      <h1 className="archievements-title">Conquistas</h1>
    </div>
    </div>
  )
}

export default Archievements;
