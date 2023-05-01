import { ReactElement, useEffect, useState } from "react";
import classes from "./quiz-page.module.css";
import { useLocation } from "react-router-dom";
import { QuizDataType } from "../../../context";
import data from "../../../data/dataset.json";
import { QuizOptions } from ".";

export const QuizPageComponent = (): ReactElement => {
  const [quizData, setQuizData] = useState<QuizDataType[]>([]);
  const { state: quizType } = useLocation();
  const { music, "modern-art": modern_art, coding } = data;

  useEffect(() => {
    getQuizDataByType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handlePrevious = () => "";

  const handleNext = () => "";

  const handleSubmit = () => "";

  return (
    <>
      <div className={classes.container1} key={quizData[0]?.id}>
        <div className={classes.container}>
          {/* Question Number */}
          <div className={classes.questionNumber}>
            <span>{quizData[0]?.id}</span>
            <span>/</span>
            <span>{quizData?.length}</span>
          </div>

          {/* Question */}
          <div className={classes.content}>{quizData[0]?.question}</div>
          <QuizOptions options={quizData[0]?.options} />

          {/* Controls */}
          <div className={classes.controls}>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
