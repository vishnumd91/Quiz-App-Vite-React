import { ReactElement, createContext, useContext, useState } from "react";
import {
  QuizContextProps,
  QuizContextProviderProps,
  QuizDataType,
} from "./quiz-context.types";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const QuizContext = createContext<QuizContextProps>(null!);

export const QuizContextProvider = ({
  children,
}: QuizContextProviderProps): ReactElement => {
  const [selectedQuiz, setSelectedQuiz] = useState("music");
  const [score, setScore] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<number>(0);
  const [indexValue, setIndexValue] = useState<number>(0);
  const [quizData, setQuizData] = useState<QuizDataType[]>([]);

  const context = {
    selectedQuiz,
    setSelectedQuiz,
    selectedOptions,
    setSelectedOptions,
    score,
    setScore,
    quizData,
    setQuizData,
    indexValue,
    setIndexValue,
  };
  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQuizContext = () => {
  return useContext(QuizContext) || [];
};
