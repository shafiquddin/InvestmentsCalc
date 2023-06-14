import React, { useState } from "react";
import classes from "./UserInputs.module.css";

const userInitialValues = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const UserInputs = (props) => {
  const [userInputs, setUserInputs] = useState(userInitialValues);

  const inputChangeHandler = (input, value) => {
    setUserInputs((preState) => {
      return {
        ...preState,
        [input]: +value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitUser(userInputs);
  };

  const resetHandler = () => {
    setUserInputs(userInitialValues);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={userInputs["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInputs["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInputs["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInputs["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInputs;
