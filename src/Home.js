import React from "react";
import { CardComponent } from "./components";
import { Options } from "./components/Options";

function Home() {
  return (
    <div className="container l:w-50 p-5">
      <Options />
      <CardComponent />
    </div>
  );
}

export { Home };
