import React from "react";
import { Divider } from "@material-ui/core";
import { Container, ImgBar, ContentContainer, ContactText } from "./style";
import { PersonalCard } from "./Card";

export const Team = () => {
  return (
    <Container style={{ paddingBottom: "90px" }}>
      <ImgBar />
      <ContentContainer>
        <h2 style={{ color: "rgba(20, 20, 100, 0.6)" }}>Our Team</h2>
        <Divider />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around"
          }}
        >
          <PersonalCard
            data={{
              name: "Mauro de Jesús",
              description:
                "Licenciado en Finanzas de la Universidad Argentina De la Empresa (UADE), Magíster en Finanzas de la Universidad Torcuato Di Tella (UTDT). Docente de Administración Financiera, Renta Fija, Valuación de Empresas, Derivados Financieros y Métodos Cuantitativos Aplicados, en programas de grado y posgrado de universidades públicas y privadas (UBA, UADE, IAEF). Secretario e investigador del CEPAF (Centro de Estudios para Análisis Financiero) de la Facultad de Ciencias Económicas, Universidad de Buenos Aires. Consultor de empresas especialista en inversiones.",
              img: "img/MaurodeJesus.jpg",
              position: "Founder",
              linkedin: "https://ar.linkedin.com/in/maurodejesus"
            }}
          />
          <PersonalCard
            data={{
              name: "Martin Luciano Brancati",
              description:
                "Licenciado en Administracion de Empresas de la Universidad Argentina De la Empresa (UADE). Posee experiencia laboral en el area de consultoria de Ernst & Young, en Global Delivery Services (GDS). Se desempeñó como Consultor Semi-Senior en proyectos para el sector privado reportando a las oficinas de EY Mexico y de EY España.",
              img: "img/MartinLucianoBrancati.JPG",
              position: "Founder",
              linkedin:
                "https://www.linkedin.com/in/martin-luciano-brancati-a3a7619b/"
            }}
          />
        </div>
      </ContentContainer>
    </Container>
  );
};
