import { ReactElement } from "react";
import classes from "./quiz-page.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const QuizOptions = (props: any): ReactElement => {
  const { options } = props;

  return (
    <div style={{ width: "80%" }}>
      {/* Options */}
      <div className={classes.options}>
        <div className={classes.input1}>
          {options &&
            options?.map((option: string) => {
              return (
                <div style={{ display: "flex", gap: "8px" }} key={option}>
                  <input id={option} type="radio" name="options" />
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
