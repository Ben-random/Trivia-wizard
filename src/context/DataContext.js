import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [guessed, setGuessed] = useState(false);

  return (
    <DataContext.Provider
      value={{
        questions,
        setQuestions,
        answers,
        setAnswers,
        guessed,
        setGuessed,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
