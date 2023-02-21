import React, { useEffect, useState, useParams, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Card from "react-bootstrap/Card";
import "./style.css";
import AnswerButton from "../AnswerButton";
import { decodeHTML } from "../../Utils";

function CardComponent(props) {
  const { questions, answers, guessed, setGuessed } = useContext(DataContext);
  const [guess, setGuess] = useState("");

  const handleGuess = (answer) => {
    setGuessed(true);
    setGuess(answer);
  };

  useEffect(() => {
    setGuessed(false);
  }, [questions]);

  return (
    <>
      <div className="body">
        {questions.length > 0 ? (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Question:</Card.Title>
              <Card.Text>{decodeHTML(questions[0].question)}</Card.Text>
              <div>
                {answers.map((answer, index) => (
                  <AnswerButton
                    key={index}
                    answer={answer}
                    handleGuess={() => handleGuess(answer)}
                  />
                ))}
                {guessed &&
                  (guess === questions[0].correct_answer ? (
                    <h1 className="text-success">Correct!</h1>
                  ) : (
                    <h1 className="text-danger">
                      Incorrect! the answer is{" "}
                      {decodeHTML(questions[0].correct_answer)}
                    </h1>
                  ))}
              </div>
            </Card.Body>
          </Card>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default CardComponent;
