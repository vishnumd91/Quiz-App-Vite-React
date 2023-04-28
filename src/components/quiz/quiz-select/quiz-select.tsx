import { ReactElement } from "react";
import classes from "./quiz-select.module.css";
import { Link } from "react-router-dom";
import { useQuizContext } from "../../../context";

export const QuizSelectComponent = (): ReactElement => {
  const { setSelectedQuiz } = useQuizContext();
  return (
    <div className={classes.landingPage}>
      <div className={classes.center}>
        <div className={`${classes.section} ${classes.music}`}>
          <Link to="/quiz-page" onClick={() => setSelectedQuiz("music")}>
            Music
          </Link>
        </div>
        <div className={`${classes.section} ${classes.modernArt}`}>
          <Link to="/quiz-page" onClick={() => setSelectedQuiz("art")}>
            Modern Art
          </Link>
        </div>
        <div className={`${classes.section} ${classes.code}`}>
          <Link to="/quiz-page" onClick={() => setSelectedQuiz("coding")}>
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};
