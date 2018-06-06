import React from "react";
import { Divider } from "@material-ui/core";
import { Container, ImgBar, ContentContainer, Li } from "./style";
export const Resources = () => {
  return (
    <Container>
      <ImgBar />
      <ContentContainer>
        <h2 style={{ color: "rgba(20, 20, 100, 0.6)" }}>Resources</h2>
        <Divider />
        <div>
          <p style={{ fontSize: "20px", marginBottom: "40px" }}>
            Las decisiones de inversiones están entre las más importantes de las
            finanzas. Esta Modelización Financiera permite conocer que proyecto
            deberá ser aceptado y cuál rechazado, generando un Dashboard de
            fácil interpretación.
          </p>

          <h3 style={{ color: "rgba(20, 20, 100, 0.6)" }}>
            Glosario de términos utilizados:
          </h3>

          <ul style={{ listStyleType: "none" }}>
            <Li>
              <strong>Payback</strong>: Cantidad de periodo que han de
              transcurrir para que la acumulación de los flujos de efectivo
              iguale a la inversión inicial.
            </Li>

            <Li>
              <strong>Discounted Payback</strong>: Es una variante mejorada del
              payback, en la que se contempla el valor tiempo del dinero, al
              expresar los flujos de efectivo en términos de su valor presente.
            </Li>

            <Li>
              <strong>Net Present Value</strong>: Valor que resulta de la
              diferencia entre el valor presente de los futuros ingresos netos
              esperados y el desembolso inicial de la inversión.
            </Li>

            <Li>
              <strong>Tasa Interna de Retorno (TIR)</strong>: Tasa que descuenta
              el valor de los futuros ingresos netos esperados igualándolos con
              el desembolso inicial de la inversión.
            </Li>

            <Li>
              <strong>Tasa interna de Retorno Modificada (TIRM)</strong>: Tasa
              de descuento que iguala el valor actual del valor terminal del
              flujo de efectivo con el desembolso inicial.
            </Li>

            <Li>
              <strong>WACC</strong>: Weighted Average Cost of Capital, también
              denominado coste promedio ponderado del capital (CPPC), es la tasa
              de descuento que se utiliza para descontar los flujos de caja
              Futuros, a la hora de valorar un proyecto de inversión.
            </Li>
          </ul>
          <h4 style={{ color: "rgba(20, 20, 100, 0.6)" }}>
            A través de la utilización de esta plataforma, usted será capaz de:
          </h4>

          <ul>
            <Li>
              Realizar una Modelización Financiera, considerando el análisis de
              la industria seleccionada ( Software, Real Estate, Banca, etc.).
            </Li>

            <Li>
              Elaborar un plan de negocios ante una oportunidad de inversion.
            </Li>

            <Li>
              Realizar el análisis financiero de una start-up, tanto en el
              ingreso a nuevas áreas del negocio como así también nuevos
              mercados.
            </Li>

            <Li>
              Distinguir entre los principales métodos financieros para la
              valuación de proyectos de inversión, generando un reporte al
              usuario.
            </Li>

            <Li>
              Facilitar la toma de decisiones por medio de los Keep Performance
              Indicators (KPI)
            </Li>

            <Li>
              Contemplar el análisis de distintos escenarios posibles para el
              proyecto, facilitando la toma de decisiones en un contexto de
              incertidumbre.
            </Li>
          </ul>
          <h4 style={{ color: "rgba(20, 20, 100, 0.6)" }}>
            Para la modelizacion financiera se utilizan:
          </h4>
          <ul>
            <Li>Indice Standard & Poors 500 ( S&P 500)</Li>

            <Li>US Treasury Rate (USA)</Li>
            <Li>
              Riesgo Pais en Argentina (Emerging Markets Index - JP Morgan)
            </Li>
            <Li>
              Todos los montos expresados en la plataforma se encuentran en US
              Dollars (USD)
            </Li>
          </ul>
        </div>
      </ContentContainer>
    </Container>
  );
};
