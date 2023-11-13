import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes, redirect } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import GameScreen from "./components/Game_Screen";
import PrivateRoutes from "./components/Utils/PrivateRoutes";
import MainScreen from "./components/MainScreen.js";
import Leaderboard from "./components/Leaderboards.js";
import Archievements from "./components/Archievements.js";

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/MainScreen" element={<MainScreen/>}></Route>
            <Route exact path="/Game" element={<GameScreen/>}></Route>
            <Route exact path="/LeaderBoards" element={<Leaderboard/>}></Route>
            <Route exact path="/Archievements" element={<Archievements/>}></Route>
          </Route>
          <Route exact path="*" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
