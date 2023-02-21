import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [questions, setQuestions] = useState([]);

  return (
    <DataContext.Provider value={{ questions, setQuestions }}>
      {props.children}
    </DataContext.Provider>
  );
};
