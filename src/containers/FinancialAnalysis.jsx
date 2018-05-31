import React, { Component } from "react";
import { Container, Title, Inputs, Header, Prop } from "../components/style";
import { LabeledInput } from "../components/Input";
import { financialAnalysis } from "../data";
import { numberOf } from "../utils/helpers";

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
      <Container>
        <Title>Financial Analysis</Title>
        <div style={{ display: "flex" }}>
          <Inputs>
            {financialAnalysis.datos.keys.map((input, i) => (
              <LabeledInput
                key={input}
                label={financialAnalysis.datos.properties[i]}
                name={input}
                value={this.state[input]}
                palceholder={0}
                handleChange={this.handleValue}
                style={{ flex: 1 }}
              />
            ))}
          </Inputs>
          <Inputs>
            <Header style={{ marginBottom: "10px" }}>Ratios Financieros</Header>
            {financialAnalysis.ratios.keys.map((input, i) => (
              <LabeledInput
                key={input}
                disable={true}
                label={financialAnalysis.ratios.properties[i]}
                value={this.state[input]}
                style={{ flex: 1 }}
              />
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
                  justifyContent: "flex-start"
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
