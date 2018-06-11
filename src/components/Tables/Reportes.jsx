import React from "react";
import { newArray } from "../../utils/helpers";
import { TableComponent } from "../Table";
import { HighlightedTable } from "../HighlightedTable";
import { Container, Title, GreenLed, RedLed, TableContainer, TableProperties, Prop } from "../style";
import { we, wd } from '../../utils/functions'
import PieIcon from 'react-icons/lib/fa/pie-chart'
import { Paper } from '@material-ui/core'

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryGroup,
  VictoryLine,
  VictoryPie
} from "victory";

export const Reportes = ({ years, results, resultOpt, resultNeg, getLineGraphData }) => {
  const buildTableData = () => {
    return [
      [resultOpt.van, results.van, resultNeg.van],
      [resultOpt.tir, results.tir, resultNeg.tir],
      [
        parseFloat(resultOpt.payback) < years ? resultOpt.payback : 'No Recupera',
        parseFloat(results.payback) < years ? results.payback : 'No Recupera',
        parseFloat(resultNeg.payback) < years ? resultNeg.payback : 'No Recupera'
      ],
      [
        parseFloat(resultOpt.paybackActualizado) < years ? resultOpt.paybackActualizado : 'No Recupera',
        parseFloat(results.paybackActualizado) < years ? results.paybackActualizado : 'No Recupera',
        parseFloat(resultNeg.paybackActualizado) < years ? resultNeg.paybackActualizado : 'No Recupera'
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
  const e = we(results);
  const d = wd(results);
  return (
    <Container>
      <Title>FINANCIAL DASHBOARD</Title>
      <TableContainer>
        <TableProperties>
          {["VAN", "TIR", "PAYBACK", "PAYBACK ACTUALIZADO"].map(prop => <Prop key={prop}>{prop}</Prop>)}
        </TableProperties>
        <TableComponent
          headers={["BEST CASE", "BASE CASE", "WORST CASE"]}
          rows={buildTableData() || []}
          style={{ width: "100%", flex: 7.5 }}
          input={false}
          color={true}
        />
      </TableContainer>
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
        <VictoryChart
          domainPadding={70}
          theme={VictoryTheme.material}
          style={{
            parent: {
              backgroundColor: 'rgba(251, 255, 186, 0.5)',
              borderRadius: '10px',
              margin: '5px'
            }
          }}
        >
          <VictoryAxis
            tickValues={[1, 2, 3]}
            tickFormat={["Best Case", "Base Case", "Worst Case"]}
          />
          <VictoryAxis
            label="VAN"
            style={{
              axisLabel: { padding: 40, fontSize: 12 },
              tickLabels: { fontSize: 8 }
            }}
            offsetX={60}
            dependentAxis
            tickFormat={van => `${parseInt(van / 1000)}k`}
          />
          <VictoryBar
            labelComponent={<VictoryLabel dy={30} />}
            labels={d => `${parseInt(d.van / 1000)}k`}
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
        <VictoryChart
          domainPadding={70}
          theme={VictoryTheme.material}
          style={{
            parent: {
              backgroundColor: 'rgba(211, 255, 222, 0.5)',
              borderRadius: '10px',
              margin: '5px'
            }
          }}
        >
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

        <VictoryChart
          domainPadding={70}
          theme={VictoryTheme.material}
          style={{
            parent: {
              backgroundColor: 'rgba(210, 209, 249, 0.5)',
              borderRadius: '10px',
              margin: '5px'
            }
          }}
        >
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
            colorScale={["rgba(21, 40, 109, 0.7)", "rgba(22, 99, 50, 0.7)"]}
            style={{ data: { width: 20 } }}
          >
            <VictoryBar
              labelComponent={<VictoryLabel dy={30} />}
              labels={d => d.payback}
              data={dataPayback}
              x="num"
              y="payback"
              style={{
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
                labels: { fill: "white", fontSize: 8 }
              }}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
      <div style={{ display: "flex", width: "90%", alignItems: 'center' }}>
        <VictoryChart
          domainPadding={70} theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickFormat={x => x}
            style={{
              axisLabel: { padding: 40, fontSize: 12 },
              tickLabels: { fontSize: 8 }
            }}
            label="WACC %"
          />
          <VictoryAxis
            label="VAN"
            style={{
              axisLabel: { padding: 40, fontSize: 12 },
              tickLabels: { fontSize: 8 }
            }}
            offsetX={60}
            dependentAxis
            tickFormat={van => `${parseInt(van / 1000)}k`}
          />
          <VictoryLine
            interpolation="natural"
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" }
            }}
            data={getLineGraphData(results)}
            y='van'
          />
        </VictoryChart>


        <VictoryChart>
          <VictoryAxis
            style={{
              axisLabel: { display: 'none' },
              tickLabels: { display: 'none' },
              axis: { display: 'none' },
            }}
          />
          <VictoryPie
            colorScale={["rgba(140, 23, 23, 0.7)", "rgba(21, 40, 109, 0.7)"]}
            labelRadius={50}
            style={{ labels: { fill: "white", fontSize: 15 } }}
            data={[{
              y: d,
              x: d,
              label: 'debt'
            }, {
              y: e,
              x: e,
              label: 'equity',
            }]}
          />
        </VictoryChart>
        <Paper style={{ display: 'flex', flexDirection: 'column', height: "100%", backgroundColor: 'rgba(0, 0, 0, 0.05)', alignItems: 'center', fontFamily: 'Roboto', padding: "10px", borderRadius: "4px" }}>
          <span style={{ textAlign: 'center' }}>CAPITAL STRUCTURE</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PieIcon style={{ color: "rgba(21, 40, 109, 0.7)", paddingRight: '10px' }} />
            <p>{`${Math.round(e * 100 / (e + d))}%`}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PieIcon style={{ color: "rgba(140, 23, 23, 0.7)", paddingRight: '10px' }} />
            <p>{`${Math.round(d * 100 / (e + d))}%`}</p>
          </div>
        </Paper>
      </div>
    </Container>
  );
};
