import React from "react";
import styled from "styled-components";
import { List, ListItem, ListItemText } from "@material-ui/core/";

const SidebarContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  flex: 1.5;
  min-width: 200px;
`;
const Cont = styled.div`
  padding-bottom: 20px;
`;

export const Sidebar = ({ onClick, selected }) => {
  const isSelected = input => ({
    backgroundColor: selected === input ? "rgba(0, 0, 0, 0.08)" : "transparent"
  });
  return (
    <SidebarContainer>
      <List component="nav">
        <Cont>
          <ListItem divider>
            <ListItemText primary="Simulation Tables" />
          </ListItem>
        </Cont>
        <ListItem
          button
          onClick={() => onClick("datos")}
          style={isSelected("datos")}
        >
          <ListItemText primary="Ingreso de datos" />
        </ListItem>
        <ListItem
          button
          onClick={() => onClick("visualizacion")}
          style={isSelected("visualizacion")}
        >
          <ListItemText primary="Visualizacion" />
        </ListItem>
        <ListItem
          button
          onClick={() => onClick("reporte")}
          style={isSelected("reporte")}
        >
          <ListItemText primary="Financial Dashboard" />
        </ListItem>
      </List>
    </SidebarContainer>
  );
};
