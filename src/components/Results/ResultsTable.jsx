import React from "react";
import classes from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearly) => (
          <tr key={yearly.year}>
            <td>{yearly.year}</td>
            <td>{formatter.format(yearly.savingsEndOfYear)}</td>
            <td>{formatter.format(yearly.yearlyInterest)}</td>
            <td>
              {formatter.format(
                yearly.savingsEndOfYear -
                  props.initialInvestment -
                  yearly.yearlyContribution * yearly.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment +
                  yearly.yearlyContribution * yearly.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ResultsTable;
