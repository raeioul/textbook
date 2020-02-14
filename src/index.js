import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import courseReducer from "./reducers/courseReducer";
import { Provider } from "react-redux";

let initialState = [
  {
    id: 1,
    name: "John Doe",
    description: 1,
    textbooks: [{ author: "Makelele Claude", title: "Real Madrid" }]
  },
  {
    id: 2,
    name: "Jane Doe",
    description: 2,
    textbooks: [{ author: "Raúl Acuña", title: "Wilstermann" }]
  },
  {
    id: 3,
    name: "Terry Adams",
    description: 3,
    textbooks: [
      { author: "Makelele Claude", title: "Real Madrid" },
      { author: "Makelele Claude", title: "Real Madrid" }
    ]
  },
  { id: 4, name: "Jenny Smith", description: 4 }
];

if (localStorage.getItem("courses") === null)
  localStorage.setItem("courses", JSON.stringify(initialState));
else initialState = JSON.parse(localStorage.getItem("courses"));

const store = createStore(courseReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
