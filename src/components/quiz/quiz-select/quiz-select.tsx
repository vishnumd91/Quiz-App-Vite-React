import { ReactElement } from "react";
import classes from "./quiz-select.module.css";
import { useNavigate } from "react-router-dom";

export const QuizSelectComponent = (): ReactElement => {
  const navigate = useNavigate();

  const handleNavigate = (quizType: string) => {
    navigate("/quiz-page", {
      state: quizType,
    });
  };

  return (
    <div className={classes.landingPage}>
      <div className={classes.center}>
        <div className={`${classes.section} ${classes.music}`}>
          <button type="submit" onClick={() => handleNavigate("music")}>
            Music
          </button>
        </div>
        <div className={`${classes.section} ${classes.modernArt}`}>
          <button type="submit" onClick={() => handleNavigate("art")}>
            Modern Art
          </button>
        </div>
        <div className={`${classes.section} ${classes.code}`}>
          <button type="submit" onClick={() => handleNavigate("coding")}>
            Code
          </button>
        </div>
      </div>
    </div>
  );
};
