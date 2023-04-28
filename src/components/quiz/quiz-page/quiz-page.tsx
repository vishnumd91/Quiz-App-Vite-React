import { ReactElement } from "react";
import classes from "./quiz-page.module.css";

export const QuizPageComponent = (): ReactElement => {
  return (
    <div className={classes.container1}>
      <div className={classes.container}>
        {/* Question Number */}
        <div className={classes.questionNumber}>
          <span>0</span>
          <span>/</span>
          <span>10</span>
        </div>

        {/* Questions */}
        <div className={classes.content}>
          What is the most common time signature in classNameical music?
        </div>
        <div className={classes.options}>
          <div className={classes.input1}>
            <input id="option1" type="radio" name="options" />
            <br />
            <label htmlFor="option1"></label>
          </div>
          <div className={classes.input1}>
            <input id="option2" type="radio" name="options" />
            <br />
            <label htmlFor="option2">"4/4"</label>
          </div>
          <div className={classes.input1}>
            <input id="option3" type="radio" name="options" />
            <br />
            <label htmlFor="option3">"4/4"</label>
          </div>
          <div className={classes.input1}>
            <input id="option4" type="radio" name="options" />
            <br />
            <label htmlFor="option4">"4/4"</label>
          </div>
        </div>

        {/* Controls */}
        <div className={classes.controls}>
          <button>Previous</button>
          <button>Next</button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};
