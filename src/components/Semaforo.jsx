import React from "react";
import { SnackbarContent } from "@material-ui/core";
import DownTrendIcon from "react-icons/lib/md/trending-down";
import UpTrendIcon from "react-icons/lib/md/trending-up";

export const Semaforo = ({ van }) => {
  const icon = van >= 0 ? <UpTrendIcon /> : <DownTrendIcon />;
  return (
    <div>
      <SnackbarContent
        style={{
          margin: "auto",
          width: "fit-content",
          backgroundColor: van >= 0 ? "green" : "red",
          textAlign: "center",
          marginBottom: "20px"
        }}
        action={icon}
        message={
          van >= 0
            ? "ACEPTO PROYECTO DE INVERSION"
            : "RECHAZO PROYECTO DE INVERSIÓN"
        }
      />
    </div>
  );
};

// react-icons/lib/md/trending-down
// react-icons/lib/md/trending-up
