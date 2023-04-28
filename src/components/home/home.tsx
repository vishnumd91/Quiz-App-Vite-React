import { ReactElement } from "react";
import classes from "./home.module.css";

export const Home = (): ReactElement => {
  return (
    <div className={classes.center}>
      <h1 className={classes.headerStyle}>Quiz Pop</h1>
      <button className={classes.quizButton}>Start Quiz</button>
    </div>
  );
};
