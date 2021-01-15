import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import User from "./core/User";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/userbase" exact component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
