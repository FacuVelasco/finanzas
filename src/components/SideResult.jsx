import React, { Component } from "react";
import { SideResult, SideElement } from "./style";
import { ResultInfo } from "./ResultInfo";

export const SideBySideContainer = ({ items }) => {
  return (
    <SideResult>
      {items.map(item => (
        <SideElement key={item.label}>
          <ResultInfo
            style={item.style}
            label={item.label}
            value={item.value}
            disable={item.disable}
          />
        </SideElement>
      ))}
    </SideResult>
  );
};
