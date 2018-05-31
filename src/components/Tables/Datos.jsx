import React from "react";
import styled from "styled-components";
import { SelectComponent } from "../Select";
import { TableComponent } from "../Table";
import { TableContainers } from "../TableContainers";
import { LabeledInput } from "../Input";
import { tableDefinition, betaUnleverage } from "../../data";
import { newArray } from "../../utils/helpers";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Divider,
  Switch,
  Paper,
  Button
} from "@material-ui/core";
import {
  Container,
  SelectorContainer,
  TableContainer,
  TableProperties,
  SingleInputContainer,
  SingleInput,
  DividedContainers,
  Prop,
  Input,
  Title,
  Center,
  Clear
} from "../style";

export const Datos = ({
  tax,
  data,
  years,
  industry,
  withFlujoInc,
  riesgoPais,
  handleTax,
  handleRowChange,
  handleYearsChange,
  handleIndustryChange,
  handleSingleValue,
  customIndustry,
  handleToggle,
  navigate,
  reset
}) => {
  return (
    <Container>
      <Title style={{ marginBottom: "30px" }}>
        SIMULATION TOOL - INGRESO DE DATOS
      </Title>
      <Divider />
      <DividedContainers>
        <SelectorContainer>
          <p>Ingresar años de Proyecto</p>
          <SelectComponent
            value={years}
            handleChange={handleYearsChange}
            items={[1, 2, 3, 4, 5, 6, 7]}
            style={{ marginLeft: "15px", marginTop: "8px" }}
          />
        </SelectorContainer>
        <SingleInputContainer>
          <LabeledInput
            name={"flujoIncremental"}
            label={"TAX"}
            value={tax}
            handleChange={handleTax}
            style={{ justifyContent: "flex-end", paddingRight: 0 }}
          />
          <div
            style={{
              width: "3px",
              marginTop: "15px",
              fontFamily: "Roboto",
              color: "rgba(0, 0, 0, 0.4)"
            }}
          >
            %
          </div>
        </SingleInputContainer>
      </DividedContainers>
      <Divider />
      <TableContainers
        table={{
          properties: tableDefinition.main.properties,
          name: "main",
          headers: newArray(years + 1),
          data: data.main,
          input: true
        }}
        handleRowChange={handleRowChange}
      />
      <Divider />
      <SelectorContainer>
        <p>Con Flujo Incremental</p>
        <Switch
          checked={withFlujoInc}
          onChange={(e, checked) => handleToggle(checked, "withFlujoInc")}
          value="withFlujoInc"
          color="primary"
        />
        <p>{withFlujoInc ? "SI" : "NO"}</p>
      </SelectorContainer>
      {withFlujoInc ? (
        <SingleInputContainer>
          {data.flujoIncremental.map(input => (
            <LabeledInput
              key={input.name}
              name={"flujoIncremental"}
              label={input.name}
              value={input.value}
              handleChange={handleSingleValue}
            />
          ))}
        </SingleInputContainer>
      ) : (
        <TableContainers
          table={{
            properties: tableDefinition.flujoInversion.properties,
            name: "flujoInversion",
            headers: newArray(years + 1),
            data: data.flujoInversion,
            input: true
          }}
          handleRowChange={handleRowChange}
        />
      )}
      <Divider />
      <TableContainers
        table={{
          properties: tableDefinition.resultados.properties,
          name: "resultados",
          headers: newArray(years + 1),
          data: data.resultados,
          input: true
        }}
        handleRowChange={handleRowChange}
      />
      <Divider />
      <Title>ACTIVO FIJO</Title>
      <SingleInputContainer>
        {data.activoFijo &&
          data.activoFijo.map(input => (
            <LabeledInput
              key={input.name}
              name={"activoFijo"}
              label={input.name}
              value={input.value}
              handleChange={handleSingleValue}
            />
          ))}
      </SingleInputContainer>
      <Divider />
      <Title>BETA UNLEVERAGE</Title>
      <SelectorContainer>
        <p>Seleccionar tipo de Industria</p>
        <Switch
          checked={!customIndustry}
          onChange={(e, checked) => handleToggle(!checked, "customIndustry")}
          value="customIndustry"
          color="primary"
        />
        <p>{customIndustry ? "NO" : "SI"}</p>
      </SelectorContainer>
      {customIndustry ? (
        <SingleInputContainer>
          {data.betaUnleverage &&
            data.betaUnleverage.map(input => (
              <LabeledInput
                key={input.name}
                name={"betaUnleverage"}
                label={input.name}
                value={input.value}
                handleChange={handleSingleValue}
              />
            ))}
        </SingleInputContainer>
      ) : (
        <SelectorContainer>
          <p>Tipo de Industria</p>
          <SelectComponent
            value={industry.industry}
            handleChange={handleIndustryChange}
            items={betaUnleverage.map(industry => industry.industry)}
            style={{ marginLeft: "15px", marginTop: "8px" }}
          />
        </SelectorContainer>
      )}
      <Divider />
      <Title>BETA LEVERAGE</Title>
      <SelectorContainer>
        <p>Ingreso manual de Riesgo Pais / Risk Free / Prima </p>
        <Switch
          checked={riesgoPais}
          onChange={(e, checked) => handleToggle(checked, "riesgoPais")}
          value="riesgoPais"
          color="primary"
        />
        <p>{riesgoPais ? "SI" : "NO"}</p>
      </SelectorContainer>
      <SingleInputContainer>
        {data.betaLeverage &&
          data.betaLeverage.map(input => (
            <LabeledInput
              key={input.name}
              name={"betaLeverage"}
              label={input.name}
              value={input.value}
              handleChange={handleSingleValue}
            />
          ))}
      </SingleInputContainer>
      {riesgoPais && (
        <SingleInputContainer>
          {data.riesgoPais &&
            data.riesgoPais.map(input => (
              <LabeledInput
                key={input.name}
                name={"riesgoPais"}
                label={input.name}
                value={input.value}
                handleChange={handleSingleValue}
              />
            ))}
        </SingleInputContainer>
      )}
      <Divider />
      <Center>
        <Button
          variant="raised"
          color="primary"
          onClick={() => navigate("visualizacion")}
        >
          Visualización de Datos
        </Button>
      </Center>
      <Clear>
        <Button variant="raised" color="secondary" onClick={reset}>
          Reset Tables
        </Button>
      </Clear>
    </Container>
  );
};
