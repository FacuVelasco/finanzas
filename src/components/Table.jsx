import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TextField
} from "@material-ui/core";
import styled from "styled-components";
import { Input } from "./style";

export const TableComponent = ({
  input,
  handleChange,
  rows,
  style,
  headers,
  table
}) => {
  return (
    <Paper
      style={Object.assign({ backgroundColor: "rgba(0,0,0,0.05)" }, style)}
    >
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(h => (
              <TableCell key={h} style={{ textAlign: "center", padding: 0 }}>
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              {row.map((elem, j) => (
                <TableCell key={j} style={{ padding: 0 }}>
                  <Input
                    disabled={!input}
                    style={{}}
                    id={`${i}-${j}`}
                    placeholder={0}
                    onFocus={e => (e.target.placeholder = "")}
                    onBlur={e => (e.target.placeholder = 0)}
                    value={input ? elem.value : elem}
                    onChange={e => handleChange(table, i, j, e.target.value)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
