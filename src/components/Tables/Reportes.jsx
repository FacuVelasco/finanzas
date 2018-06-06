import React from "react";
import { newArray } from "../../utils/helpers";
import { TableContainers } from "../TableContainers";
import { HighlightedTable } from "../HighlightedTable";
import { Container, Title, GreenLed, RedLed, Header } from "../style";
import { BarChart } from "react-easy-chart";
import LineChart from "react-linechart";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryGroup
} from "victory";

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
    result.tir ? Number(result.tir.substring(0, result.tir.length - 1)) : "-";

  const dataVAN = [
    { van: parseInt(resultOpt.van), num: 1 },
    { van: parseInt(results.van), num: 2 },
    { van: parseInt(resultNeg.van), num: 3 }
  ];
  const dataTIR = [
    { tir: parseFloat(resultOpt.tir && resultOpt.tir.slice(0, -1)), num: 1 },
    { tir: parseFloat(results.tir && results.tir.slice(0, -1)), num: 2 },
    { tir: parseFloat(resultNeg.tir && resultNeg.tir.slice(0, -1)), num: 3 }
  ];
  const dataPayback = [
    { payback: parseFloat(resultOpt.payback), num: 1 },
    { payback: parseFloat(results.payback), num: 2 },
    { payback: parseFloat(resultNeg.payback), num: 3 }
  ];
  const dataPaybackActualizado = [
    { paybackA: parseFloat(resultOpt.paybackActualizado), num: 1 },
    { paybackA: parseFloat(results.paybackActualizado), num: 2 },
    { paybackA: parseFloat(resultNeg.paybackActualizado), num: 3 }
  ];
  const dataColors = [
    "rgba(22, 99, 50, 0.7)",
    "rgba(21, 40, 109, 0.7)",
    "rgba(140, 23, 23, 0.7)"
  ];
  console.log("dataPayback", dataPayback);
  console.log("dataPaybackA", dataPaybackActualizado);
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
        <VictoryChart domainPadding={70} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[1, 2, 3]}
            tickFormat={["Best Case", "Base Case", "Worst Case"]}
          />
          <VictoryAxis
            label="VAN / 1000"
            style={{
              axisLabel: { padding: 40, fontSize: 12 },
              tickLabels: { fontSize: 8 }
            }}
            offsetX={60}
            dependentAxis
            tickFormat={van => parseInt(van / 1000)}
          />
          <VictoryBar
            labelComponent={<VictoryLabel dy={30} />}
            labels={d => parseInt(d.van / 1000)}
            data={dataVAN}
            alignment="middle"
            x="num"
            y="van"
            style={{
              data: { fill: d => dataColors[d.num - 1] },
              labels: { fill: "white", fontSize: 8 }
            }}
          />
        </VictoryChart>
        <VictoryChart domainPadding={70} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[1, 2, 3]}
            tickFormat={["Best Case", "Base Case", "Worst Case"]}
          />
          <VictoryAxis
            label="TIR"
            style={{
              axisLabel: { padding: 40, fontSize: 12 },
              tickLabels: { fontSize: 8 }
            }}
            offsetX={60}
            dependentAxis
            tickFormat={tir => tir}
          />
          <VictoryBar
            labelComponent={<VictoryLabel dy={30} />}
            labels={d => d.tir}
            data={dataTIR}
            alignment="middle"
            x="num"
            y="tir"
            style={{
              data: { fill: d => dataColors[d.num - 1] },
              labels: { fill: "white", fontSize: 8 }
            }}
          />
        </VictoryChart>

        <VictoryChart domainPadding={70} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[1, 2, 3]}
            tickFormat={["Best Case", "Base Case", "Worst Case"]}
          />
          <VictoryAxis
            label="PAYBACK"
            style={{
              axisLabel: { padding: 40, fontSize: 12 },
              tickLabels: { fontSize: 8 }
            }}
            offsetX={60}
            dependentAxis
          />
          <VictoryGroup
            offset={25}
            colorScale={"qualitative"}
            style={{ data: { width: 20 } }}
          >
            <VictoryBar
              labelComponent={<VictoryLabel dy={30} />}
              labels={d => d.payback}
              data={dataPayback}
              x="num"
              y="payback"
              style={{
                // data: { fill: d => dataColors[d.num - 1] },
                labels: { fill: "white", fontSize: 8 }
              }}
            />
            <VictoryBar
              labelComponent={<VictoryLabel dy={30} />}
              labels={d => d.paybackA}
              data={dataPaybackActualizado}
              x="num"
              y="paybackA"
              style={{
                // data: { fill: d => dataColors[d.num - 1] },
                labels: { fill: "white", fontSize: 8 }
              }}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    </Container>
  );
};
