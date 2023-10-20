import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import GameScreen from "./components/Game_Screen";
import PrivateRoutes from "./components/Utils/PrivateRoutes";

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <div>
        <NavBar/>
        </div>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/Main" element={<GameScreen />}></Route>
            <Route exact path="/Game" element={<GameScreen />}></Route>
            <Route exact path="/LeaderBoards" element={<GameScreen />}></Route>
          </Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
