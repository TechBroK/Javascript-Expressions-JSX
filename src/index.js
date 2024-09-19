import React from "react";
import ReactDOM from "react-dom";

const fname = "Adekunle";
const lname = "Adebayo";
const num = 3;
ReactDOM.render(
  <div>
    <h1>Hello {lname + " " + fname}!</h1>
    <p>My lucky number is {num}</p>
    <p>
      Think of a number between 0-9. <br />
      Your number is {Math.floor(Math.random() * 10)}{" "}
    </p>
  </div>,
  document.getElementById("root")
);
