import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { decodeHTML } from "../../Utils";
import Button from "react-bootstrap/Button";

export default function AnswerButton({ answer, handleGuess }) {
  return (
    <Button
      style={{ margin: "10px" }}
      variant="outline-primary"
      onClick={handleGuess}
    >
      {decodeHTML(answer)}
    </Button>
  );
}
