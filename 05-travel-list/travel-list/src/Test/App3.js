import { useState } from "react";

export default function App3() {
  return (
    <div>
      <UpdatedSlider />
    </div>
  );
}

function UpdatedSlider() {
  const [step, setSetp] = useState(0);
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + step);
  }

  function decrement() {
    setCount(count - step);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function getDateString(index) {
    if (0 === index) {
      return "Today is";
    }
    if (0 < index) {
      return "In the future";
    }

    return "in the past";
  }

  return (
    <div
      style={{
        width: "300px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setSetp(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={increment}>+</button>
      </div>
      <div>
        <span>{count === 0 ? "" : count} </span>
        <span>
          {getDateString(count)} {date.toDateString()}
        </span>
      </div>
      <div>
        {count === 0 ? (
          ""
        ) : (
          <button
            onClick={function () {
              setCount(0);
              setSetp(1);
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
