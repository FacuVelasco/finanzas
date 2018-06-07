import React from "react";
import { TableContainer, TableProperties, Prop, Header, Center } from "./style";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TextField
} from "@material-ui/core";
import { Input } from "./style";

export const HighlightedTable = ({ table, style }) => (
  <TableContainer>
    <Prop style={{ flex: 2.5 }}>{table.properties}</Prop>
    <Table style={{ flex: 8 }}>
      <TableBody>
        <TableRow style={{ padding: "0 5px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
          {table.data.map((elem, i) => (
            <TableCell
              key={i}
              style={Object.assign({ borderBottom: '0px', padding: 0, textAlign: "center" }, style)}
            >
              {elem}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
