import React from "react";
import { SingleInput, Prop, Input } from "./style";
import { Paper } from "@material-ui/core";

export const LabeledInput = ({
  label,
  handleChange,
  value,
  name,
  disable,
  style
}) => (
  <SingleInput>
    <Prop style={style}>{label}</Prop>
    <Paper
      style={Object.assign(
        { display: "flex", backgroundColor: "rgba(0,0,0,0.05)" },
        style
      )}
    >
      <Input
        style={style}
        disable={disable}
        type="text"
        onChange={e => handleChange(e.target.value, name, label)}
        onFocus={e => (e.target.placeholder = "")}
        onBlur={e => (e.target.placeholder = 0)}
        value={value}
        placeholder={0}
      />
    </Paper>
  </SingleInput>
);
