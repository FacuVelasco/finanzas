import React from "react";

import {
  Dialog,
  Button,
  Typography,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

export class Supuestos extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={{ textAlign: "right" }}>
        <Button
          style={{ backgroundColor: "rgba(63, 81, 181, 0.8)", color: "white" }}
          onClick={this.handleClickOpen}
        >
          Supuestos Adoptados
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Supuestos Adoptados</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  margin: "10px 0",
                  color: "rgba(0, 0, 0, 0.6)"
                }}
              >
                Capital de Trabajo Neto
              </Typography>
              <Typography>
                <ul>
                  <li>Se considera compras igual costo de ventas.</li>
                  <li>
                    Se consideran las inversiones en Inventarios y
                    Financiamiento con Proveedores desde el Momento 0.
                  </li>
                  <li>
                    Se considera que las cuentas por cobrar del último año se
                    cobran el último año.
                  </li>
                </ul>
              </Typography>
              <Typography
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  margin: "10px 0",
                  color: "rgba(0, 0, 0, 0.6)"
                }}
              >
                Activo Fijo{" "}
              </Typography>
              <Typography>
                <ul>
                  <li>Se considera año de alta.</li>
                </ul>
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
