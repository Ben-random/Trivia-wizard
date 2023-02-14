import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <div data-testid="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
