import { Dispatch, ReactNode } from "react";

export type QuizContextProps = {
  selectedQuiz: string;
  setSelectedQuiz: Dispatch<string>;
  selectedOptions: number;
  setSelectedOptions: Dispatch<number>;
  score: number;
  setScore: Dispatch<number>;
  quizData: QuizDataType[];
  setQuizData: Dispatch<QuizDataType[]>;
  indexValue: number;
  setIndexValue: Dispatch<number>;
};

export type QuizDataType = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  category: string;
};

export type QuizContextProviderProps = {
  children: ReactNode;
};
