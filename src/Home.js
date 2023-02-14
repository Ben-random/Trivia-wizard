import React, { useEffect, useState, useParams } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardComponent } from "./components";
import Options from "./components/Options";

function Home() {
  return (
    <div>
      <Options />
      <CardComponent />
    </div>
  );
}

export { Home };
