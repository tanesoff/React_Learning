import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const skills = [
  {
    skill: "Html-Css",
    level: "advanced",
    color: "Yellow",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "Green",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "Red",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "Blue",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "Orange",
  },
];

function Card() {
  const box = { width: "400px", height: "500px", border: "3px solid black" };

  return (
    <div style={box}>
      <Slika Img="pizzas/salamino.jpg" />
      <Tekst />
    </div>
  );
}

function Slika({ Img }) {
  return (
    <img
      src={Img}
      alt="pizza"
      style={{ width: "395px", height: "250px", objectFit: "cover" }}
    />
  );
}

function Tekst() {
  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: 10 }}>Viktor Tanevski</h1>
      <p style={{ fontSize: 14, marginBottom: 10 }}>
        Full stack web delevoper bla bla sad yeah yeah yeah wowow wow see me in
        bla bla viktor ova ona vamu tamu malku pojke text
      </p>
      <Skills Skills={skills} />
    </div>
  );
}

function Skills({ Skills }) {
  return Skills.map((skill) => (
    <span
      style={{
        backgroundColor: `${skill.color}`,
        borderRadius: 5,
        padding: 3,
        margin: 4,
        display: "inline-block",
      }}
    >
      {skill.skill}
      {Emoji(skill.level)}
    </span>
  ));
}

function Emoji(lvl) {
  if (lvl === "advanced") {
    return "💪";
  }
  if (lvl === "intermediate") {
    return "😁";
  }
  if (lvl === "beginner") {
    return "😒";
  }
  return "❓";
}

function App() {
  return (
    <div className="container">
      {/* <Header />
      <Menu />
      <Footer /> */}
      <Card />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authenic Italian cuisne. 6 creative dishes to choose from . All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mushrooms,"
        photoName="pizzas/funghi.jpg"
        price={15}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   hour >= openHour && hour <= closeHour
  //     ? alert("We are open")
  //     : alert("We are closed");

  // if (!isOpen) {
  //   return <p>CLOSED</p>;
  // }

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : <p>CLOSED FOOTER</p>}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open");
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
