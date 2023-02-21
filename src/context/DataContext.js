import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  return (
    <DataContext.Provider
      value={{ questions, setQuestions, answers, setAnswers }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
