import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import App from "./ch1";

import StarRating from "./StarRateing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating color="red" maxRating={10} size={24} defaultRating={3} /> */}
  </React.StrictMode>
);
