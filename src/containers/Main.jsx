import React, { Component } from "react";
import { Route, Switch } from "react-router";

import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { SimulationTool } from "./SimulationTool";
import { FinancialAnalysis } from "./FinancialAnalysis";
import { Resources } from "../components/Resources";
import { Team } from "../components/Team";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { relative } from "path";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.routes = [
      "/",
      "/simulation",
      "/analysis",
      "/resources",
      "/team",
      "/contact"
    ];
    this.state = {
      tab: this.routes.findIndex(route => route === props.location.pathname)
    };
  }

  render() {
    return (
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <Header tabIndex={this.state.tab} onChange={this.selectTab} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/simulation" component={SimulationTool} />
          <Route path="/analysis" component={FinancialAnalysis} />
          <Route path="/resources" component={Resources} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
  }

  selectTab = (e, tab) => {
    this.setState({ tab });
    this.props.history.push(this.routes[tab]);
  };
}
