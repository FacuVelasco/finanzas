import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./containers/Main";
// Main conponent ready for setup

const App = (
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>
);

render(App, document.getElementById("app"));
