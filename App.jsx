import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import SecondPage from "./page/SecondPage";
import NotFoundPage from "./page/NotFoundPage";
import DetailPage from "./page/DetailPgae";
import WritePage from "./page/WritePage";
import RegisterPage from "./page/RegisterPage";

const App = () => {
  return (
    <>
    <Switch>
      <Route path={"/"} component={MainPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/second" component={SecondPage} />
      <Route path="/:name/:id" component={DetailPage} />
      <Route path="/write" component={WritePage} />
      <Route component={NotFoundPage} />
    </Switch>
    </>
  );
};

export default App;
