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
    answers,
    setAnswers,
    guessed,
    setGuessed,
    category,
    difficulty,
    type,
    score,
    setScore,
    lives,
    setLives,
    favouritesDeck,
    setFavouritesDeck,
    cacheDeck,
    setCacheDeck,
  } = useContext(DataContext);
  const [guess, setGuess] = useState("");
  const [disableNextButton, setDisabeNextButton] = useState("false");
  const [favourite, setFavourite] = useState(false);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    setQuestions(props.questions);
  }, [props.questions]);

  useEffect(() => {
    if (questions[0]) {
      setAnswers(
        [...questions[0].incorrect_answers, questions[0].correct_answer].sort(
          () => Math.random() - 0.5
        )
      );
    }
  }, [questions]);

  const handleGuess = (answer) => {
    setGuessed(true);
    setGuess(answer);

    handleLives();
  };

  const addToFavourites = () => {
    setFavourite(true);
    setFavouritesDeck([...favouritesDeck, questions[0]]);
    setCacheDeck([...favouritesDeck]);
  };

  const removeFromFavourites = () => {
    setFavourite(false);
    favouritesDeck.pop();
    setFavouritesDeck(favouritesDeck);
    setCacheDeck([...favouritesDeck]);
  };

  const restartFavouriteDeck = () => {
    setCacheDeck([...favouritesDeck]);
  };

  const handleNextQuestion = async () => {
    if (window.location.pathname !== "/") {
      console.log("not home page");
      const len = questions.length;
      if (len > 1) {
        console.log("attempting to pop questions from fav deck copy");
        console.log(questions === favouritesDeck);
        console.log(questions);
        questions.shift();
        console.log("new question", questions);
        setAnswers(
          [...questions[0].incorrect_answers, questions[0].correct_answer].sort(
            () => Math.random() - 0.5
          )
        );
        console.log("hi");
      }
    } else {
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
    }

    if (lives >= 0 && guessed) {
      setScore(score + 1);
      console.log("Score:", score);
      console.log("Lives:", lives);
    } else if (lives < 0) {
      console.log("Game over");
      setScore(1);
      setLives(3);
      console.log("Score:", score);
      console.log("Lives:", lives);
    }
  };

  useEffect(() => {
    setGuessed(false);
  }, [answers, questions, setGuessed]);

  useEffect(() => {
    if (questions[0]) {
      setFavourite(favouritesDeck.includes(questions[0]));
    }
  }, [questions[0]]);

  function NextButton() {
    return (
      <>
        <Button
          className="next-button"
          variant="outline-primary"
          style={{ margin: "10px" }}
          disable={disableNextButton}
          onClick={handleNextQuestion}
        >
          Next
        </Button>
      </>
    );
  }

  function RestartFavDeckButton() {
    return (
      <>
        <Button
          className="next-button"
          variant="outline-primary"
          style={{ margin: "10px" }}
          onClick={restartFavouriteDeck}
        >
          Restart Questions
        </Button>
      </>
    );
  }

  const handleLives = () => {
    if (guess !== questions[0].correct_answer && guess !== "") {
      setLives(lives - 1);
      console.log("Lives:", lives);
    }
  };
  return (
    <>
      <div className="card-body card p-2 mb-4">
        {questions?.length > 0 ? (
          <Card>
            <Card.Body>
              <Card.Title>
                <section className="questions-row">
                  <section className="question">
                    {favourite ? (
                      <HeartFill
                        className="heart"
                        onClick={removeFromFavourites}
                      />
                    ) : (
                      <Heart onClick={addToFavourites} />
                    )}{" "}
                    Question:
                  </section>
                  <section className="restart-favdeck-button">
                    {window.location.pathname !== "/" && (
                      <RestartFavDeckButton />
                    )}
                  </section>
                </section>
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
                      Incorrect! The answer is{" "}
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
