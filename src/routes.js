import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/profile" exact component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
}
