import React from "react";
import {Route} from "react-router-dom";
import MainPage from "./page/MainPage";

const App = () => {
  return <Route path="/" component={MainPage} exact />;
};

export default App;
