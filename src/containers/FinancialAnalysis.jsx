import React, { Component } from "react";
import {
  Container,
  Title,
  Inputs,
  Header,
  Prop,
  SingleInput,
  Input
} from "../components/style";
import { LabeledInput } from "../components/Input";
import { financialAnalysis } from "../data";
import { numberOf } from "../utils/helpers";
import { Paper } from "@material-ui/core";

export class FinancialAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activoCorriente: "",
      activoNoCorriente: "",
      activoTotal: "",
      pasivoCorriente: "",
      pasivoNoCorriente: "",
      pasivoTotal: "",
      patrimonioNeto: "",
      inventarios: "",
      ventas: "",
      cmv: "",
      utilidadNeta: "",
      liquidezCorriente: "",
      capitalTrabajo: "",
      endeudamientoSobrePN: "",
      endeudamientoSobreActivo: "",
      rotacionDeInventarios: "",
      rotacionDeActivoTotal: "",
      margenDeUtilidad: "",
      roa: "",
      roe: ""
    };
  }
  render() {
    return (
      <Container style={{ paddingBottom: "90px" }}>
        <Title>Financial Analysis</Title>
        <div style={{ display: "flex" }}>
          <Inputs>
            {financialAnalysis.datos.keys.map((input, i) => (
              <SingleInput style={{ height: "50px" }} key={input}>
                <Prop style={{ width: "100%", minWidth: "200px" }}>
                  {financialAnalysis.datos.properties[i]}
                </Prop>
                <Paper
                  style={{
                    display: "flex",
                    backgroundColor: "rgba(0,0,0,0.05)"
                  }}
                >
                  <Input
                    style={{ flex: 1 }}
                    type="text"
                    onChange={e =>
                      this.handleValue(e.target.value, input)
                    }
                    onFocus={e => (e.target.placeholder = "")}
                    onBlur={e => (e.target.placeholder = 0)}
                    value={this.state[input]}
                    placeholder={0}
                  />
                </Paper>
              </SingleInput>
            ))}
          </Inputs>
          <Inputs>
            <Header style={{ marginBottom: "10px" }}>Ratios Financieros</Header>
            {financialAnalysis.ratios.keys.map((input, i) => (
              <SingleInput style={{ height: "60px" }} key={input}>
                <Prop
                  style={{
                    width: "100%",
                    minWidth: "200px",
                    height: "60px"
                  }}
                >
                  {financialAnalysis.ratios.properties[i]}
                </Prop>
                <Paper
                  style={{
                    display: "flex",
                    backgroundColor: "rgba(0,0,0,0.05)"
                  }}
                >
                  <Input
                    style={{ flex: 1 }}
                    type="text"
                    disable={true}
                    value={this.state[input]}
                    placeholder={0}
                  />
                </Paper>
              </SingleInput>
            ))}
          </Inputs>
          <Inputs style={{ flex: 1 }}>
            <Header style={{ marginBottom: "10px" }}>
              Interpretacion Financiera
            </Header>
            {financialAnalysis.interpretacion.map(prop => (
              <Prop
                key={prop}
                style={{
                  whiteSpace: "normal",
                  textAlign: "left",
                  justifyContent: "flex-start",
                  height: "59px"
                }}
              >
                {prop}
              </Prop>
            ))}
          </Inputs>
        </div>
      </Container>
    );
  }

  handleValue = (value, name) => {
    this.setState({ [name]: value }, () => {
      const tot = Object.keys(this.state).reduce(
        (tot, val) => tot + (Boolean(this.state[val]) ? 1 : 0),
        0
      );

      if (tot >= 11) {
        this.evaluateRatios();
      }
    });
  };

  evaluateRatios = () => {
    const p = num => `${(num * 100).toFixed(2)}%`;
    const n = num => num.toFixed(2);
    const s = this.state;
    Object.keys(s).forEach(prop => (s[prop] = numberOf(s[prop])));
    const newState = {
      liquidezCorriente: n(
        s.pasivoCorriente ? s.activoCorriente / s.pasivoCorriente : 0
      ),
      endeudamientoSobrePN: n(
        s.patrimonioNeto ? s.pasivoTotal / s.patrimonioNeto : 0
      ),
      endeudamientoSobreActivo: n(
        s.activoTotal ? s.pasivoTotal / s.activoTotal : 0
      ),
      rotacionDeInventarios: n(s.inventarios ? s.cmv / s.inventarios : 0),
      rotacionDeActivoTotal: n(s.activoTotal ? s.ventas / s.activoTotal : 0),
      margenDeUtilidad: p(s.ventas ? s.utilidadNeta / s.ventas : 0),
      roa: p(s.activoTotal ? s.utilidadNeta / s.activoTotal : 0),
      roe: p(s.patrimonioNeto ? s.utilidadNeta / s.patrimonioNeto : 0)
    };
    this.setState(newState);
  };
}
