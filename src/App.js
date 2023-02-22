import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Favourites from "./Favourites";
import Navigation from "./components/Navigation";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div data-testid="app">
      <BrowserRouter>
        <DataProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
