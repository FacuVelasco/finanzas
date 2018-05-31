import React from "react";
import { TableComponent } from "./Table";
import { TableContainer, TableProperties, Prop, Header } from "./style";

export const TableContainers = ({ table, handleRowChange, titleHeader }) => (
  <TableContainer>
    <TableProperties>
      <Header>{titleHeader || "AÑOS"}</Header>
      {table.properties.map(prop => <Prop key={prop}>{prop}</Prop>)}
    </TableProperties>
    <TableComponent
      table={table.name}
      headers={table.headers}
      rows={table.data || []}
      handleChange={handleRowChange}
      style={{ width: "100%", flex: 7.5 }}
      input={table.input}
    />
  </TableContainer>
);
