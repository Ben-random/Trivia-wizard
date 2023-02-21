import React from "react";
import { CardComponent } from "./components";
import {Options} from "./components/Options";

function Home() {
  return (
    <div>
      <Options />
      <CardComponent />
    </div>
  );
}

export { Home };
