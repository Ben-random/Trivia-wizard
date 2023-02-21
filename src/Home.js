import React, { useEffect, useState, useParams } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardComponent } from "./components";
import Navigation from "./components/Navigation";
import Options from "./components/Options";

function Home() {
  const qSet = [
    { q: "Who killed JFK?", a: true },
    { q: "Who is the wrapper m&m?", a: false },
    { q: "How does this effect LeBron's legacy?", a: true },
  ];
  return (
    <div>
      <Navigation />
      <Options />
      <CardComponent qArr={qSet} />
    </div>
  );
}

export { Home };
