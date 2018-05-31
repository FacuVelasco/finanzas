import React from "react";
import { newArray } from "../../utils/helpers";
import { TableContainers } from "../TableContainers";
import { HighlightedTable } from "../HighlightedTable";
import { Container, Title, GreenLed, RedLed, Header } from "../style";
import { BarChart } from "react-easy-chart";
import LineChart from "react-linechart";
// import "../node_modules/react-linechart/dist/styles.css";

export const Reportes = ({ years, results, resultOpt, resultNeg }) => {
  const buildTableData = () => {
    return [
      [resultOpt.van, results.van, resultNeg.van],
      [resultOpt.tir, results.tir, resultNeg.tir],
      [resultOpt.payback, results.payback, resultNeg.payback],
      [
        resultOpt.paybackActualizado,
        results.paybackActualizado,
        resultNeg.paybackActualizado
      ]
    ];
  };
  const selectColor = van => {
    return van >= 0 ? <GreenLed /> : <RedLed />;
  };
  const getTirNumber = result =>
    result.tir ? Number(result.tir.substring(0, result.tir.length - 1)) : 0;
  const data = [
    {
      color: "steelblue",
      points: [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }]
    }
  ];
  return (
    <Container>
      <Title>FINANCIAL DASHBOARD</Title>
      <TableContainers
        titleHeader={""}
        table={{
          properties: ["VAN", "TIR", "PAYBACK", "PAYBACK ACTUALIZADO"],
          headers: ["BEST CASE", "BASE CASE", "WORST CASE"],
          data: buildTableData(),
          input: false
        }}
      />
      <HighlightedTable
        table={{
          properties: "CRITERIO DE DECISION",
          data: [
            selectColor(resultOpt.van),
            selectColor(results.van),
            selectColor(resultNeg.van)
          ]
        }}
      />
      <div style={{ display: "flex" }}>
        <div>
          <Header style={{ justifyContent: "center" }}>VAN</Header>
          <BarChart
            colorBars
            axes
            axisLabels={{ y: "van" }}
            data={[
              {
                x: "Best Case",
                y: resultOpt.van,
                color: "rgba(4, 209, 48, 0.8)"
              },
              {
                x: "Base Case",
                y: results.van,
                color: "rgba(19, 71, 214, 0.8)"
              },
              {
                x: "Worst Case",
                y: resultNeg.van,
                color: "rgb(211, 19, 63, 0.8)"
              }
            ]}
          />
        </div>
        <div>
          <Header style={{ justifyContent: "center" }}>TIR</Header>
          <BarChart
            colorBars
            axes
            axisLabels={{ y: "tir" }}
            data={[
              {
                x: "Best Case",
                y: getTirNumber(resultOpt),
                color: "rgba(4, 209, 48, 0.8)"
              },
              {
                x: "Base Case",
                y: getTirNumber(results),
                color: "rgba(19, 71, 214, 0.8)"
              },
              {
                x: "Worst Case",
                y: getTirNumber(resultNeg),
                color: "rgb(211, 19, 63, 0.8)"
              }
            ]}
          />
        </div>
        <div>
          <Header style={{ justifyContent: "center" }}>PAYBACK</Header>
          <BarChart
            colorBars
            axes
            axisLabels={{ y: "payback" }}
            data={[
              {
                x: "Best Case P",
                y: resultOpt.payback,
                color: "rgba(19, 71, 214, 0.8)"
              },
              {
                x: "Best Case PA",
                y: resultOpt.paybackActualizado,
                color: "rgb(211, 19, 63, 0.8)"
              },
              {
                x: "Base Case P",
                y: results.payback,
                color: "rgba(19, 71, 214, 0.8)"
              },
              {
                x: "Base Case PA",
                y: results.paybackActualizado,
                color: "rgb(211, 19, 63, 0.8)"
              },
              {
                x: "Worst Case P",
                y: resultNeg.payback,
                color: "rgba(19, 71, 214, 0.8)"
              },
              {
                x: "Worst Case PA",
                y: resultNeg.paybackActualizado,
                color: "rgb(211, 19, 63, 0.8)"
              }
            ]}
          />
        </div>
        {/* <LineChart width={600} height={400} data={data} /> */}
      </div>
    </Container>
  );
};
