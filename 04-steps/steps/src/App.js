import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      {/* <Steps /> */}
      <Challenge1 />
    </div>
  );
}

function Challenge1() {
  // var date = new Date(1696158508049);
  var oneDay = 86400000;

  const [step, setStep] = useState(0);

  function incrementStep() {
    setStep((s) => s + 1);
  }

  function decrementStep() {
    setStep((s) => s - 1);
  }

  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((s) => s + step);
    setDate((s) => s + step * 86400000);
  }

  function decrementCount() {
    setCount((s) => s - step);
    setDate((s) => s - step * 86400000);
  }

  const [date, setDate] = useState(1696158508049);

  return (
    <div>
      <div>
        <button onClick={decrementStep}>-</button>
        <h1 style={{ display: "inline-block", margin: "5px" }}>Step: {step}</h1>
        <button onClick={incrementStep}>+</button>
      </div>
      <div>
        <button onClick={decrementCount}>-</button>
        <h1 style={{ display: "inline-block", margin: "5px" }}>
          Count: {count}
        </h1>
        <button onClick={incrementCount}>+</button>
      </div>
      <h1>
        {count !== 0 ? count : ""} days from today is{" "}
        {new Date(date).toDateString()}
      </h1>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((s) => !s)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7960f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previuos
            </button>
            <button
              style={{ backgroundColor: "#7960f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
