import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { hot } from "react-hot-loader/root";

const Hot = hot(App);
ReactDOM.render(
  <BrowserRouter>
    <Hot />
  </BrowserRouter>,
  document.querySelector("#root")
);
