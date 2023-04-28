import { ReactElement } from "react";
import classes from "./home.module.css";
import { useNavigate } from "react-router-dom";

export const Home = (): ReactElement => {
  const navigate = useNavigate();

  const navigateToSelect = () => {
    navigate("/quiz-select");
  };

  return (
    <div className={classes.center}>
      <h1 className={classes.headerStyle}>Quiz Pop</h1>
      <button className={classes.quizButton} onClick={navigateToSelect}>
        Start Quiz
      </button>
    </div>
  );
};
