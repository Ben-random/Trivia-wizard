import { useContext } from "react";
import { CardComponent } from "./components";
import { DataContext } from "./context/DataContext";

export default function Favourites() {
  const { questions, setQuestions, favouritesDeck, setCacheDeck } =
    useContext(DataContext);
  setQuestions(favouritesDeck);
  return (
    <>
      <h1>Favourites page</h1>
      <CardComponent />
    </>
  );
}
