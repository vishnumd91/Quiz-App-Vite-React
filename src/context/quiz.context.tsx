import {
  Dispatch,
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

type QuizContextProps = {
  selectedQuiz: string;
  setSelectedQuiz: Dispatch<string>;
  // quizData: QuizDataType[];
  //   setQuizData: Dispatch<QuizDataType>;
};

export type QuizDataType = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  category: string;
};

type QuizContextProviderProps = {
  children: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const QuizContext = createContext<QuizContextProps>(null!);

export const QuizContextProvider = ({
  children,
}: QuizContextProviderProps): ReactElement => {
  const [selectedQuiz, setSelectedQuiz] = useState("music");
  // const [quizData, setQuizData] = useState([]);

  const context = {
    selectedQuiz,
    setSelectedQuiz,
    // quizData,
    // setQuizData
  };
  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQuizContext = () => {
  return useContext(QuizContext) || [];
};
