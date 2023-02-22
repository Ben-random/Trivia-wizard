import React, { useContext } from "react";
import { CardComponent } from "./components";
import { Options } from "./components/Options";
import { DataContext } from "./context/DataContext";

function Home() {
  const { cacheDeck, setQuestions } = useContext(DataContext);
  if (cacheDeck.length > 0) {
    setQuestions(...[cacheDeck]);
  }
  return (
    <div className="container l:w-50 p-5">
      <Options />
      <CardComponent />
    </div>
  );
}

export { Home };
