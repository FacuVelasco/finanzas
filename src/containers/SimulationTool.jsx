import React, { Component } from "react";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Datos } from "../components/Tables/Datos";
import { Visualizacion } from "../components/Tables/Visualizacion";
import { Reportes } from "../components/Tables/Reportes";
import { generateRow } from "../utils/helpers";
import { tableDefinition, betaUnleverage } from "../data";
import * as f from "../utils/functions";

const Simulation = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;
`;

const TableContainer = styled.div`
  flex: 8.5;
  padding-top: 20px;
`;

export class SimulationTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "datos",
      years: 5,
      data: {},
      results: {},
      resultOpt: {},
      resultNeg: {},
      withFlujoInc: false,
      industry: { industry: "Advertising" },
      customIndustry: false,
      riesgoPais: false,
      tax: 35,
      variacion: 10
    };
  }

  componentDidMount() {
    this.generateColumns(5);
  }

  render() {
    const { label } = this.state;
    let table = null;
    if (label === "datos")
      table = (
        <Datos
          {...this.state}
          handleYearsChange={this.setYears}
          handleRowChange={this.updateData}
          handleSingleValue={this.updateSingleValue}
          handleIndustryChange={this.setIndustry}
          handleTax={this.setTax}
          handleVar={this.setVariation}
          handleToggle={this.handleToggle}
          navigate={this.changeSubTab}
          reset={this.reset}
        />
      );
    if (label === "visualizacion")
      table = (
        <Visualizacion
          {...this.state}
          calculateResults={this.calculateResults}
          navigate={this.changeSubTab}
        />
      );
    if (label === "reporte") table = <Reportes {...this.state} getLineGraphData={this.getLineGraphData} />;

    return (
      <Simulation>
        <Sidebar onClick={this.changeSubTab} selected={label} />
        <TableContainer>{table}</TableContainer>
      </Simulation>
    );
  }

  generateColumns = n => {
    const data = {};
    Object.keys(tableDefinition).forEach(table => {
      if (tableDefinition[table].singleValue) {
        data[table] = generateRow(
          tableDefinition[table].properties.length,
          tableDefinition[table].type,
          tableDefinition[table].properties
        );
      } else {
        data[table] = tableDefinition[table].properties.map(() =>
          generateRow(
            tableDefinition[table].extraColumn ? n + 2 : n + 1,
            tableDefinition[table].type
          )
        );
      }
    });
    this.setState({ data, years: n });
  };

  reset = () => {
    this.setState({
      data: {},
      results: {},
      resultNeg: {},
      resultOpt: {}
    });
    this.generateColumns(this.state.years);
  };

  setYears = e => {
    this.generateColumns(e.target.value);
  };

  setVariation = variacion => {
    this.setState({ variacion });
  };

  setTax = tax => {
    this.setState({ tax });
  };

  changeSubTab = label => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.setState({ label });
  };

  updateData = (table, i, j, value) => {
    const { data } = this.state;
    data[table][i][j].value = value;
    this.setState({ data });
  };

  handleToggle = (checked, property) => {
    this.setState({ [property]: checked });
  };

  setIndustry = e => {
    const { data } = this.state;
    const industry = betaUnleverage.find(
      element => element.industry === e.target.value
    );
    data.betaUnleverage[0].value = industry.beta;
    data.betaUnleverage[1].value = industry.ratio;
    this.setState({ industry, data });
  };

  updateSingleValue = (value, table, label) => {
    const { data } = this.state;
    const element = data[table].find(elem => elem.name === label);
    element.value = value;
    this.setState({ data });
  };

  calculateResults = r => {
    const { variacion } = this.state;
    const o = JSON.parse(JSON.stringify(r));
    const n = JSON.parse(JSON.stringify(r));
    o.cantidad = o.cantidad.map(n => n * (1 + variacion / 100));
    n.cantidad = n.cantidad.map(n => n * (1 - variacion / 100));

    [o, n, r].forEach(obj => this.format(this.calculate(obj)));
    this.setState({ results: r, resultOpt: o, resultNeg: n });

    return r;
  };

  calculate = r => {
    // should be cleanup a little
    const { years, tax, withFlujoInc, riesgoPais } = this.state;

    r.inventario = [];
    r.ventasInc = [];
    r.cuentasPorCobrar = [];
    r.ctnRequerido = [];
    r.variacion = [];
    r.cuentasPorPagar = [];
    r.costoVariableInc = [];
    r.utilPreTax = [];
    r.taxes = [];
    r.resultadoNeto = [];
    r.depreciacion = [];
    r.feo = [];
    r.cmvTot = [];
    r.inventario = [];
    r.cuentasPorCobrar = [];
    r.cuentasPorPagar = [];
    r.ctnRequerido = [];
    r.variacionCTN = [];
    r.variacionAF = [];
    r.efectoColPos = [];
    r.efectoColNeg = [];
    r.costoOportNeto = [];
    r.flujoCajaProyecto = [];
    r.vaff = [];
    r.wacc = f.wacc(r, tax, riesgoPais) * 100;
    for (var j = 0; j < years + 1; j++) {
      r.ventasInc[j] =
        j > 0 ? f.ventasIncrementales(r.cantidad[j], r.precioVenta[j]) : 0;
      r.costoVariableInc[j] =
        j > 0
          ? f.costoVariableIncremental(r.costoVariable[j], r.ventasInc[j])
          : 0;
      r.utilPreTax[j] = f.utilidadPreTaxes(r, j);
      r.taxes[j] = f.postTaxes(r.utilPreTax[j], tax);
      r.resultadoNeto[j] = f.resultadoNeto(r.utilPreTax[j], r.taxes[j]);
      r.depreciacion[j] = r.amortizacion[j];
      r.feo[j] = f.feo(r.resultadoNeto[j], r.amortizacion[j]);
      r.cmvTot[j] = f.cmvTot(r, j);
    }
    for (var i = 0; i < years + 1; i++) {
      if (withFlujoInc) {
        r.inventario[i] = f.inventario(r, i);
        r.cuentasPorCobrar[i] = i !== 0 ? f.cuentasPorCobrar(r, i) : 0;
        r.cuentasPorPagar[i] = f.cuentasPorPagar(r, i);
        r.ctnRequerido[i] = f.CTNRequerido(r, i);
        r.variacion[i] = f.variacion(r, i);
      }

      r.variacionCTN[i] = f.variacionCTN(r, i, withFlujoInc);
      r.variacionAF[i] = i == 0 ? f.variacionAF(r) : 0;
      r.efectoColPos[i] = i > 0 ? f.efectosColateralesPositivos(r, i, tax) : 0;
      r.efectoColNeg[i] = i > 0 ? f.efectosColateralesNegativos(r, i, tax) : 0;
      r.costoOportNeto[i] =
        i > 0 ? f.costoDeOportunidad(r.costoOport[i], tax) : 0;
      r.flujoCajaProyecto[i] = f.flujoDeCajaDelProyecto(r, i);

      r.vaff[i] = r.flujoCajaProyecto[i] / Math.pow(1 + r.wacc / 100, i);
    }
    if (withFlujoInc) r.variacion[i] = f.variacion(r, i);
    if (withFlujoInc) r.variacionCTN[i] = f.variacionCTN(r, i, withFlujoInc);

    r.variacionAF[i] = f.flujoActivoFijo(r, tax);

    r.flujoCajaProyecto[i] = r.variacionCTN[i] ? r.variacionCTN[i] + r.variacionAF[i] : r.variacionAF[i];
    r.vaff[i] = r.flujoCajaProyecto[i] / Math.pow(1 + r.wacc / 100, i);

    r.payback = f.payback(r.flujoCajaProyecto);
    r.paybackActualizado = f.payback(r.vaff);

    r.van = f.van(r.vaff);

    r.tir = f.getTir(r.flujoCajaProyecto) * 100;

    r.co = r.pi + r.pcxc;
    r.ce = r.pi + r.pcxc - r.pcxp;

    return r;
  };

  format = obj => {
    const porcentage = [
      "tir",
      "wacc",
      "ke",
      "costoCan",
      "costoSin",
      "costoVariable"
    ];
    Object.keys(obj).forEach(property => {
      const value = obj[property];
      if (typeof value === "number") {
        obj[property] = `${value.toFixed(2)}${
          porcentage.includes(property) ? "%" : ""
          }`;
      } else {
        obj[property] = value.map(
          val => `${val.toFixed(2)}${porcentage.includes(property) ? "%" : ""}`
        );
      }
    });

    return obj;
  };

  getLineGraphData = (r) => {
    const { years } = this.state;
    const vaff = [];
    const data = [];
    for (var wacc = 0; wacc <= 20; wacc += 1) {
      for (var i = 0; i < years + 1; i++) {
        vaff[i] = r.flujoCajaProyecto ? r.flujoCajaProyecto[i] / Math.pow(1 + (wacc * 5) / 100, i) : 0;
      }
      data[wacc] = {
        van: f.van(vaff),
        x: wacc * 5
      }
    }
    return data;
  }
}
