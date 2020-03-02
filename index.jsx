import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore} from "redux";
import App from "./App";
import { hot } from "react-hot-loader/root";
import rootReducer from "./modules";


const store = createStore(rootReducer);

const Hot = hot(App);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Hot />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
