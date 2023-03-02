import { useContext, useState } from "react";
import { CardComponent } from "./components";
import { DataContext } from "./context/DataContext";

export default function Favourites() {
  const { questions, setQuestions, favouritesDeck, setCacheDeck, cacheDeck } =
    useContext(DataContext);

  return (
    <>
      <h1>Favourites page</h1>
      <CardComponent questions={cacheDeck} />
    </>
  );
}
