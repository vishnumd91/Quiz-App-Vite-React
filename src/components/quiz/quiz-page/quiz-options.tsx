import { ChangeEvent, ReactElement } from "react";
import classes from "./quiz-page.module.css";
import { useQuizContext } from "../../../context";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const QuizOptions = (props: any): ReactElement => {
  const { options } = props;
  const {
    selectedOptions,
    setSelectedOptions,
    setScore,
    score,
    quizData,
    indexValue,
  } = useQuizContext();

  const handleSelection = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedOptions(selectedOptions + 1);
      const checkAnswer = quizData[indexValue].answer === event.target.value;
      if (checkAnswer) {
        setScore(score + 1);
      }
    }
    return selectedOptions;
  };

  return (
    <div style={{ width: "80%" }}>
      {/* Options */}
      <div className={classes.options}>
        <div className={classes.input1}>
          {options &&
            options?.map((option: string) => {
              return (
                <div style={{ display: "flex", gap: "8px" }} key={option}>
                  <input
                    id={option}
                    type="radio"
                    name="options"
                    value={option}
                    onChange={(e) => handleSelection(e)}
                  />
                  <label htmlFor={option}>{option}</label>
                  <br />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
