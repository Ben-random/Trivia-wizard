import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [guessed, setGuessed] = useState(false);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("boolean");
  const [favouritesDeck, setFavouritesDeck] = useState([]);
  const [cacheDeck, setCacheDeck] = useState([]);
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [alive, setAlive] = useState(true);

  return (
    <DataContext.Provider
      value={{
        questions,
        setQuestions,
        answers,
        setAnswers,
        setGuessed,
        guessed,
        category,
        setCategory,
        difficulty,
        setDifficulty,
        type,
        setType,
        score,
        setScore,
        alive,
        setAlive,
        favouritesDeck,
        setFavouritesDeck,
        navigate,
        cacheDeck,
        setCacheDeck,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
