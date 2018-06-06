import React from "react";
import { Logo, BlueBar } from "./style";
import { AppBar, Tabs, Tab } from "@material-ui/core";

export const Header = ({ onChange, tabIndex }) => {
  return (
    <div>
      <BlueBar />
      <AppBar
        position="static"
        color="default"
        style={{ position: "relative", height: "55px" }}
      >
        <Logo>W Analytics</Logo>
        <Tabs
          value={tabIndex}
          onChange={onChange}
          indicatorColor={"primary"}
          centered
          style={{ position: "absolute", width: "80%", right: 0 }}
        >
          <Tab label="Home" />
          <Tab label="Simulation Tool" />
          <Tab label="Financial Analysis" />
          <Tab label="Resources" />
          <Tab label="Our Team" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
    </div>
  );
};
