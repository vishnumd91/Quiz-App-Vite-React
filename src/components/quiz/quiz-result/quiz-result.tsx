import { ReactElement } from "react";
import classes from "./quiz-result.module.css";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../../../context";

export const QuizResultComponent = (): ReactElement => {
  const navigate = useNavigate();
  const { selectedOptions, score, setScore, setSelectedOptions } =
    useQuizContext();
  const handleRedirect = () => {
    navigate("/quiz-select");
    setSelectedOptions(0);
    setScore(0);
  };

  return (
    <>
      <span id={classes["header"]}>Results</span>
      <div id={classes["containerResult"]}>
        <div id={classes["answers"]}>
          <p>Total questions answered correctly: {score}</p>
          <p>number of questions attempted</p>
          <h4>{selectedOptions}</h4>
          {/* <p>total time taken for the quiz-pop</p>
          <h4>10 minutes and 45 seconds</h4> */}
          {score > 5 ? (
            <p>Congratulations, You have passed the test</p>
          ) : (
            <p>Better luck next time</p>
          )}
        </div>

        {/* <div id={classes["quote"]}>
          <p>"Don't worry that it did not last, smile because it happened"</p>
        </div> */}
        <div className={classes.tryButton}>
          <button onClick={handleRedirect}>home</button>
        </div>
      </div>
    </>
  );
};
