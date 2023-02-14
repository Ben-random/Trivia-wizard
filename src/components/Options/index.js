import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Options.css";

function Options() {
  const [category, setCategory] = useState("");
  const [size, setSize] = useState(1);
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("boolean");
  const { setQuestions } = useContext(DataContext);

  const fetchQuestion = () => {
    const API = `https://opentdb.com/api.php?amount=${size}&category=${category}&difficulty=${difficulty}&type=${type}`;
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h1>Options component</h1>
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
          onChange={(e) => setSize(e.target.value)}
        >
          <option>Size</option>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
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

export default Options;