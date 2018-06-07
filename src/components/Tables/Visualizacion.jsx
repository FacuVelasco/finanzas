import React, { Component } from "react";
import styled from "styled-components";
import { Container, Title, DividedContainers, Center } from "../style";
import { SideBySideContainer } from "../SideResult";
import { TableContainers } from "../TableContainers";
import { Semaforo } from "../Semaforo";
import { Supuestos } from "../Supuestos";
import { LabeledInput } from "../Input";
import { HighlightedTable } from "../HighlightedTable";
import { getData, newArray } from "../../utils/helpers";
import { tableDefinition, resultDefinition } from "../../data";
import { Divider, LinearProgress, Button } from "@material-ui/core";

export class Visualizacion extends Component {
  constructor(props) {
    super(props);
    this.state = { result: {}, loaded: false };
  }

  componentDidMount() {
    var a = {
      cantidad: [0, 150000, 150000, 150000, 150000, 150000],
      precioVenta: [0, 10, 10, 10, 10, 10],
      costoVariable: [0, 40.0, 40.0, 40.0, 40.0, 40.0],
      cantidadCan: [0, 1000, 1000, 1000, 1000, 1000],
      precioCan: [0, 100.0, 100.0, 100.0, 100.0, 100.0],
      costoCan: [0, 40.0, 40.0, 40.0, 40.0, 40.0],
      cantidadSin: [0, 1500, 1500, 1500, 1500, 1500],
      precioSin: [0, 100.0, 100.0, 100.0, 100.0, 100.0],
      costoSin: [0, 40.0, 40.0, 40.0, 40.0, 40.0],
      tax: 35,
      costoOport: [0, 100000, 100000, 100000, 100000, 100000],
      compraMaq: 600000,
      ventaMaq: 200000,
      pi: 60,
      pcxc: 30,
      pcxp: 30,
      costoFijo: [0, 0, 0, 0, 0, 0],
      cmv: [0, 0, 0, 0, 0, 0],
      costoVenta: [0, 0, 0, 0, 0, 0],
      gastoCom: [30000, 200000, 200000, 200000, 200000, 200000],
      gastoAdm: [0, 0, 0, 0, 0, 0],
      gastoVar: [0, 175000, 175000, 175000, 175000, 0],
      amortizacion: [0, 120000, 120000, 120000, 120000, 120000],
      flujoInv: [-100000, 0, 0, 0, 0, 80000],
      beta: 1.15,
      ratioUnleverage: 0.7387,
      ratioLeverage: 0.766,
      tasa: 9,
      pcxc: 30,
      pcxp: 30,
      pi: 60,
    };
    // const result = this.props.calculateResults(
    //   getData(this.props.data, tableDefinition)
    // );

    const result = this.props.calculateResults(a);
    this.setState({ result, loaded: true });
  }

  render() {
    const { loaded, result } = this.state;
    const { years, withFlujoInc, navigate } = this.props;
    return loaded ? (
      <Container>
        <DividedContainers>
          <Title style={{ marginTop: "0px" }}>
            TABLA DE VISUALIZACION DE RESULTADOS
          </Title>
          <Supuestos />
        </DividedContainers>
        <TableContainers
          table={{
            properties: resultDefinition.table.properties,
            headers: newArray(years + 2),
            data: this.buildResultTable(),
            input: false
          }}
        />
        <HighlightedTable
          table={{
            properties: "FLUJO DE CAJA DEL PROYECTO",
            data: result.flujoCajaProyecto
          }}
        />
        <HighlightedTable
          table={{ properties: "VA (FF)", data: result.vaff }}
        />
        <Semaforo van={result.van} />
        <Title>VALORES FINALES</Title>
        <SideBySideContainer
          items={[
            { disable: true, label: "VAN", value: result.van },
            { disable: true, label: "TIR", value: result.tir }
          ]}
        />
        <SideBySideContainer
          items={[
            {
              disable: true,
              label: "PAYBACK",
              value: result.payback,
              style: { color: "rgba(63, 81, 181, 0.8)" }
            },
            {
              disable: true,
              label: "PAYBACK ACTUALIZADO",
              value: result.paybackActualizado,
              style: { color: "rgba(63, 81, 181, 0.8)" }
            }
          ]}
        />
        <SideBySideContainer
          items={[
            {
              disable: true,
              label: "BETA LEVERAGE",
              value: result.betaLeverage
            },
            {
              disable: true,
              label: "BETA UNLEVERAGE",
              value: result.betaUnleverage
            }
          ]}
        />
        <SideBySideContainer
          items={[
            { disable: true, label: "KE NUEVO", value: result.ke },
            { disable: true, label: "WACC", value: result.wacc }
          ]}
        />
        <Title>CAPITAL TRABAJO NETO</Title>
        {withFlujoInc && (
          <TableContainers
            table={{
              properties: resultDefinition.trabajoNeto.properties,
              headers: newArray(years + 1),
              data: [
                result.inventario,
                result.cuentasPorCobrar,
                result.cuentasPorPagar,
                result.ctnRequerido,
                result.variacion
              ],
              input: false
            }}
          />
        )}
        <HighlightedTable
          table={{
            properties: "FLUJO DE INVERSION CTN",
            data: result.variacionCTN
          }}
        />
        <Title>VENTA MAQUINARIA</Title>
        <SideBySideContainer
          items={[
            { disable: true, label: "VALOR COMPRA", value: result.compraMaq },
            { disable: true, label: "VALOR VENTA", value: result.ventaMaq }
          ]}
        />
        <SideBySideContainer
          items={[
            {
              disable: true,
              label: "VALOR CONTABLE",
              value: result.valorContable
            },
            { disable: true, label: "RESULTADO BRUTO", value: result.brutoMaq }
          ]}
        />
        <SideBySideContainer
          items={[
            {
              disable: true,
              label: "FLUJO FIJO ACTIVO",
              value: result.variacionAF[years + 1]
            },
            { disable: true, label: "TAX", value: result.taxMaq }
          ]}
        />
        <Title>PERIODOS</Title>
        <SideBySideContainer
          items={[
            { disable: true, label: "PERIODO INVENTARIOS", value: result.pi },
            {
              disable: true,
              label: "ROTACION INVENTARIOS",
              value: result.pi != 0 ? (365 / result.pi).toFixed(2) : 0
            }
          ]}
        />
        <SideBySideContainer
          items={[
            {
              disable: true,
              label: "PERIODO CUENTAS POR COBRAR",
              value: result.pcxc
            },
            {
              disable: true,
              label: "ROTACION DE CUENTAS POR COBRAR",
              value: result.pcxc != 0 ? (365 / result.pcxc).toFixed(2) : 0
            }
          ]}
        />
        <SideBySideContainer
          items={[
            {
              disable: true,
              label: "PERIODO CUENTAS POR PAGAR",
              value: result.pcxp
            },
            {
              disable: true,
              label: "ROTACION DE CUENTAS POR PAGAR",
              value: result.pcxp != 0 ? (365 / result.pcxp).toFixed(2) : 0
            }
          ]}
        />
        <SideBySideContainer
          items={[
            { disable: true, label: "CICLO OPERATIVO", value: result.co },
            { disable: true, label: "CICLO EFECTIVO", value: result.ce }
          ]}
        />
        <Center>
          <Button
            variant="raised"
            color="primary"
            onClick={() => navigate("reporte")}
          >
            Financial Dashboard
          </Button>
        </Center>
      </Container>
    ) : (
        <div style={{ marginTop: "50px" }}>
          <LinearProgress />
        </div>
      );
  }

  buildResultTable = () => {
    const { result } = this.state;

    return [
      result.ventasInc,
      result.costoVariableInc,
      result.costoFijo,
      result.cmv,
      result.costoVenta,
      result.gastoCom,
      result.gastoAdm,
      result.gastoVar,
      result.amortizacion,
      result.utilPreTax,
      result.taxes,
      result.resultadoNeto,
      result.depreciacion,
      result.feo,
      result.variacionCTN,
      result.variacionAF,
      result.efectoColPos,
      result.efectoColNeg,
      result.costoOportNeto
    ];
  };
}

var a = {
  cantidad: [150000, 150000, 150000, 150000, 1500000],
  precioVenta: [10, 10, 10, 10, 10],
  costoVariable: [40.0, 40.0, 40.0, 40.0, 40.0],
  cantidadCan: [1000, 1000, 1000, 1000, 1000],
  precioCan: [100.0, 100.0, 100.0, 100.0, 100.0],
  costoCan: [40.0, 40.0, 40.0, 40.0, 40.0],
  cantidadSin: [1500, 1500, 1500, 1500, 1500],
  precioSin: [100.0, 100.0, 100.0, 100.0, 100.0],
  costoSin: [40.0, 40.0, 40.0, 40.0, 40.0],
  tax: 35,
  costoOport: [100000, 100000, 100000, 100000, 100000],
  compraMaq: 600000,
  ventaMaq: 200000,
  pi: 60,
  pcxc: 30,
  pcxp: 30,
  costoFijo: [0, 0, 0, 0, 0, 0],
  cmv: [0, 0, 0, 0, 0, 0],
  costoVenta: [0, 0, 0, 0, 0, 0],
  gastoCom: [0, 200000, 200000, 200000, 200000, 200000],
  gastoAdm: [0, 0, 0, 0, 0, 0],
  gastoVar: [0, 175000, 175000, 175000, 175000, 0],
  amortizacion: [0, 120000, 120000, 120000, 120000, 120000],
  flujoInv: [-100000, 0, 0, 0, 0, 80000],
  beta: 1.15,
  ratioUnleverage: 0.7387,
  ratioLeverage: 0.766,
  tasa: 9
};
