import React, { useContext } from "react";
import { CardComponent } from "./components";
import { Options } from "./components/Options";
import { DataContext } from "./context/DataContext";

function Home() {
  const { questions } = useContext(DataContext);

  return (
    <div className="container l:w-50 p-5">
      <Options />
      <CardComponent questions={questions} />
    </div>
  );
}

export { Home };
