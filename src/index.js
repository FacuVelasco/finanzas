import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import Main from "./containers/Main";
// Main conponent ready for setup

const App = (
  <HashRouter>
    <Route path="/" component={Main} />
  </HashRouter>
);

render(App, document.getElementById("app"));
