import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Options.css";

function fetchNextQuestion(category, difficulty, type) {
  const API = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`;
  return fetch(API)
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

function Options() {
  const { setQuestions, setAnswers, category, setCategory, difficulty, setDifficulty, type, setType } =
    useContext(DataContext);

  const fetchQuestion = async () => {
    await fetchNextQuestion(category, difficulty, type)
      .then((data) => {setQuestions(data.results)
        setAnswers(
          [
            ...data.results[0].incorrect_answers,
            data.results[0].correct_answer,
          ].sort(() => Math.random() - 0.5)
        )})
  };

  return (
    <>
      <section className="options-menu">
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Category</option>
          <option value="9">General Knowledge</option>
          <option value="22">Geography</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setType(e.target.value)}
        >
          <option>Type</option>
          <option value="boolean">True/False</option>
          <option value="multiple">Multiple Choice</option>
        </Form.Select>

        <Button variant="primary" onClick={fetchQuestion}>
          Filter
        </Button>
      </section>
    </>
  );
}

export {Options, fetchNextQuestion};
