import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Card from "react-bootstrap/Card";
import "./style.css";
import AnswerButton from "../AnswerButton";
import { decodeHTML } from "../../Utils";
import { fetchNextQuestion } from "../Options";
import Button from "react-bootstrap/Button";
import { Heart, HeartFill } from "react-bootstrap-icons";

function CardComponent(props) {
  const {
    questions,
    setQuestions,
    answers,
    setAnswers,
    guessed,
    setGuessed,
    category,
    difficulty,
    type,
    favouritesDeck,
    setFavouritesDeck,
  } = useContext(DataContext);
  const [guess, setGuess] = useState("");
  const [favourite, setFavourite] = useState(false);

  const handleGuess = (answer) => {
    setGuessed(true);
    setGuess(answer);
  };

  const addToFavourites = () => {
    setFavourite(true);
    setFavouritesDeck([...favouritesDeck, questions[0]]);
  };

  const removeFromFavourites = () => {
    setFavourite(false);
    favouritesDeck.pop();
    setFavouritesDeck(favouritesDeck);
  };

  const handleNextQuestion = async () => {
    if (questions.length > 2) {
      setGuess("");
      questions.shift();
      console.log("Questions:", questions);
      setAnswers(
        [...questions[0].incorrect_answers, questions[0].correct_answer].sort(
          () => Math.random() - 0.5
        )
      );
      //console.log("Questions:", questions)
      console.log("Answers:", answers);
    } else {
      setGuess("");
      await fetchNextQuestion(category, difficulty, type).then((data) => {
        setQuestions(data.results);
        console.log("Questions:", questions);
        setAnswers(
          [
            ...data.results[0].incorrect_answers,
            data.results[0].correct_answer,
          ].sort(() => Math.random() - 0.5)
        );
        console.log("Answers:", answers);
      });
    }
  };

  useEffect(() => {
    setGuessed(false);
  }, [answers, questions, setGuessed]);

  useEffect(() => {
    setFavourite(favouritesDeck.includes(questions[0]));
  }, [questions[0]]);

  function NextButton() {
    return (
      <>
        <Button
          className="next-button"
          variant="outline-primary"
          style={{ margin: "10px" }}
          onClick={handleNextQuestion}
        >
          Next
        </Button>
      </>
    );
  }

  return (
    <>
      <div className="card-body card p-2 mb-4">
        {questions.length > 0 ? (
          <Card>
            <Card.Body>
              <Card.Title>
                {favourite ? (
                  <HeartFill className="heart" onClick={removeFromFavourites} />
                ) : (
                  <Heart onClick={addToFavourites} />
                )}{" "}
                Question:
              </Card.Title>
              <Card.Text>{decodeHTML(questions[0].question)}</Card.Text>
              <div>
                <section className="buttons">
                  <section className="answer-buttons">
                    {answers.map((answer, index) => (
                      <AnswerButton
                        key={index}
                        answer={answer}
                        handleGuess={() => handleGuess(answer)}
                      />
                    ))}
                  </section>
                  <section>
                    <NextButton />
                  </section>
                </section>

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
