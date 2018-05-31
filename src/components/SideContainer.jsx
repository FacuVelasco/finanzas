import React, { Component } from "react";
import { SideContainer, SideElement } from "./style";
import { LabeledInput } from "./Input";

export const SideBySideContainer = ({ items }) => {
  return (
    <SideContainer>
      {items.map(item => (
        <SideElement key={item.label}>
          <LabeledInput
            style={item.style}
            label={item.label}
            value={item.value}
            disable={item.disable}
          />
        </SideElement>
      ))}
    </SideContainer>
  );
};
