import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { decodeHTML } from "../../Utils";

export default function AnswerButton({ answer, handleGuess }) {
  return <button onClick={handleGuess}>{decodeHTML(answer)}</button>;
}
