import React from "react";
import { SingleResult, Prop, Input } from "./style";
import { Paper } from "@material-ui/core";

export const ResultInfo = ({
  label,
  handleChange,
  value,
  name,
  disable,
  style
}) => (
  <SingleResult>
    <Prop style={{ width: "100%", ...style }}>{label}</Prop>
    <Paper
      style={{ display: "flex", backgroundColor: "rgba(0,0,0,0.05)", ...style }}
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
  </SingleResult>
);
