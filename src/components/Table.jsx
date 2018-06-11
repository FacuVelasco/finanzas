import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import { Input } from "./style";

export const TableComponent = ({
  input,
  handleChange,
  rows,
  style,
  headers,
  table,
  color
}) => {
  const getColor = (i) => {
    if (i === 0) return 'rgba(251, 255, 186, 0.5)'
    if (i === 1) return 'rgba(211, 255, 222, 0.5)'
    if (i > 1) return 'rgba(210, 209, 249, 0.5)'
  }
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
            <TableRow key={i} style={color ? { backgroundColor: getColor(i) } : {}}>
              {row.map((elem, j) => (
                <TableCell key={j} style={{ padding: 0 }}>
                  <Input
                    disabled={!input}
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
