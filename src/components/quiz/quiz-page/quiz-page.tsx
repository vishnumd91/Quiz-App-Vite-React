/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect, useState } from "react";
import classes from "./quiz-page.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { QuizDataType } from "../../../context";
import data from "../../../data/dataset.json";
import { QuizOptions } from "./quiz-options";

export const QuizPageComponent = (): ReactElement => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState<QuizDataType[]>([]);
  const [quizQuestion, setQuizQuestion] = useState<QuizDataType>();
  const [indexValue, setIndexValue] = useState<number>(0);
  const { state: quizType } = useLocation();
  const { music, "modern-art": modern_art, coding } = data;

  useEffect(() => {
    getQuizDataByType();
  }, []);

  useEffect(() => {
    findQuizByIndex();
  }, [indexValue, quizData]);

  const getQuizDataByType = () => {
    switch (quizType) {
      case "music":
        setQuizData(structuredClone(music));
        break;
      case "art":
        setQuizData(structuredClone(modern_art));
        break;
      case "coding":
        setQuizData(structuredClone(coding));
        break;
      default:
        setQuizData([]);
        break;
    }
  };

  // Find the proper question based on the manually defined indexValue
  const findQuizByIndex = () => {
    const selectedQuestion = quizData?.find(
      (quiz) => quiz?.id === quizData[indexValue]?.id
    );
    setQuizQuestion(selectedQuestion);
  };

  const handleSubmit = () => navigate("/quiz-result");

  return (
    <div className={classes.container1} key={quizQuestion?.id}>
      <div className={classes.container}>
        {/* Question Number */}
        <div className={classes.questionNumber}>
          <span>
            {indexValue + 1} / {quizData?.length}
          </span>
        </div>

        {/* Question */}
        <div className={classes.content}>{quizQuestion?.question}</div>

        <QuizOptions options={quizQuestion?.options} />

        {/* Controls */}
        <div className={classes.controls}>
          {indexValue > 0 ? (
            <button onClick={() => setIndexValue((prev) => prev - 1)}>
              Previous
            </button>
          ) : null}
          {indexValue !== quizData.length - 1 ? (
            <button onClick={() => setIndexValue((prev) => prev + 1)}>
              Next
            </button>
          ) : null}
          {indexValue === quizData.length - 1 ? (
            <button onClick={handleSubmit}>Submit</button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
