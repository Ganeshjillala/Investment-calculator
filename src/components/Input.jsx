import { useState } from "react";
import Result from "./Result";
export default function Input() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(userIdentifier, newValue) {
    setuserInput((prevInputs) => {
      return { ...prevInputs, [userIdentifier]: +newValue };
    });
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label for="initial">initial investment </label>
          <input
            type="number"
            name="initial"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Final investment </label>
          <input
            type="number"
            name="annual"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("finalInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label for="initial">annual Return </label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>final amount </label>
          <input
            type="number"
            name="annual"
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
      <Result input={userInput} />
    </section>
  );
}
