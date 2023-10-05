import { useState } from "react";

const ListTip = [
  {
    title: "Dissatisfied (0%)",
    value: 0,
  },
  {
    title: "it was okay (5%)",
    value: 5,
  },
  {
    title: "It was good (10%)",
    value: 10,
  },
  {
    title: "Absolutley amazing! (20%)",
    value: 20,
  },
];

export default function App5() {
  return (
    <div>
      <Main />
    </div>
  );
}

function Main() {
  const [amount, setAmount] = useState(0);
  const [friendOne, setFriendOne] = useState(0);
  const [friendTwo, setFriendTwo] = useState(0);

  function Reset() {
    setFriendOne(0);
    setFriendTwo(0);
    setAmount(0);
  }

  return (
    <div>
      <Bill amount={amount} onSetAmount={setAmount}>
        How much was the bill?
      </Bill>
      <Tip friendMoney={friendOne} onSetFriend={setFriendOne}>
        How much you like the service?{" "}
      </Tip>
      <Tip friendMoney={friendTwo} onSetFriend={setFriendTwo}>
        How did your friend like the service?{" "}
      </Tip>
      {amount > 0 ? (
        <>
          <Message amount={amount} percent={(friendOne + friendTwo) / 2} />
          <Button onReset={Reset} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
//How much was the bill? {text}
//How much you like the service? {dropdown}
//How did your friend like the service? {dropdown}
//You pay $$ ($ + $tip)
//Reset

function Button({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

function Message({ amount, percent }) {
  return (
    <div>
      <h3>
        You pay {amount !== 0 ? (percent / amount) * 100 + amount : ""}
        (${amount} + %{percent})
      </h3>
    </div>
  );
}

function Tip({ children, friendMoney, onSetFriend }) {
  return (
    <div>
      {children}
      <select
        value={friendMoney}
        onChange={(e) => onSetFriend(Number(e.target.value))}
      >
        {ListTip.map((tip) => (
          <option key={tip.value} value={tip.value}>
            {tip.title}
          </option>
        ))}
      </select>
    </div>
  );
}

function Bill({ amount, onSetAmount, children }) {
  return (
    <div>
      {children}
      <input
        style={{ marginLeft: "10px" }}
        type="number"
        value={amount}
        onChange={(e) => onSetAmount(Number(e.target.value))}
      />
    </div>
  );
}
