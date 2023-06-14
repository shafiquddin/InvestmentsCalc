import React, { useState } from "react";
import Header from "./components/Header/Header";
import UserInputs from "./components/UserInputs/UserInputs";
import ResultsTable from "./components/Results/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInputs onSubmitUser={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}>No Investment Calculated yet.</p>
      )}
      {userInput && (
        <ResultsTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
