import React from "react";
import { newArray } from "../../utils/helpers";
import { TableContainers } from "../TableContainers";
import { HighlightedTable } from "../HighlightedTable";
import { Container, Title, GreenLed, RedLed } from "../style";

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
          properties: "CRITERIO",
          data: [
            selectColor(resultOpt.van),
            selectColor(results.van),
            selectColor(resultNeg.van)
          ]
        }}
      />
    </Container>
  );
};
