import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

export const SelectComponent = ({
  handleChange,
  value,
  label,
  items,
  style
}) => {
  return (
    <FormControl style={style || {}}>
      {label && <InputLabel htmlFor={label}>{label}</InputLabel>}
      <Select value={value} onChange={handleChange} inputProps={{ id: label }}>
        {items.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
