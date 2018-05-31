import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

import LinkedinIcon from "react-icons/lib/fa/linkedin";

export const PersonalCard = ({ data }) => {
  return (
    <div style={{ margin: "70px", flex: 1 }}>
      <img
        style={{
          height: "250px",
          width: "250px",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "0 0",
          marginBottom: "20px"
        }}
        src={data.img}
        alt={data.name}
      />
      <div style={{ width: "250px", fontFamily: "Roboto" }}>
        <h4 style={{ color: "rgba(20, 20, 100, 0.6)", margin: "5px 0" }}>
          {data.name}
        </h4>
        <div style={{ margin: "5px 0", color: "rgba(0, 0, 0, 0.4)" }}>
          {data.position}
        </div>
        <div style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "14px" }}>
          {data.description}
        </div>
        <a href={data.linkedin}>
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
};
