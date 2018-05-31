import React from "react";
import { Divider } from "@material-ui/core";
import { Container, ImgBar, ContentContainer, ContactText } from "./style";
export const Contact = () => {
  return (
    <Container>
      <ImgBar />
      <ContentContainer>
        <h2 style={{ color: "rgba(20, 20, 100, 0.6)" }}>Contact</h2>
        <Divider />

        <ContactText>
          <div>
            Para obtener más información sobre nuestro trabajo o cualquier
            solicitud de propuesta que desee compartir, no dude en comunicarse
            con nosotros.
          </div>
          <div style={{ marginTop: "30px" }}>
            For more information regarding our work, or any proposal request you
            would like to share, feel free to contact us.
          </div>
        </ContactText>
      </ContentContainer>
    </Container>
  );
};
