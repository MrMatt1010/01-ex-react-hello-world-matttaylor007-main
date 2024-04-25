// TODO: We will go over what these import statements are in the future
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Part B Exercise code below

//const rootElement = document.querySelector("#root");
// const element = document.createElement("h1");
// element.textContent = "Helo World";
// rootElement.appendChild(element);

// Part C & D Exercise code below
// const rootElement = document.querySelector("#root");
// //const element = React.createElement("h1", { children: "Hello World" });
// const element = <h1>Hello World</h1>;
// ReactDOM.render(element, rootElement);

// Part E Exercise code below
const rootElement = document.querySelector("#root");
const Message = () => <h1>Hello World</h1>;
const element = (
  <>
    <Message />
    <Message />
    <Message />
  </>
);
ReactDOM.render(element, rootElement);
