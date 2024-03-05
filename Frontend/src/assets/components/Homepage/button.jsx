import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "../../../pages/CSS/homepage.css";

function Buttons() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          position: "relative",
          justifyContent: "space-evenly",
          marginTop: 1,
        }}
      >
        <Button
          sx={{
            color: "#34A853",
            "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
            mx: 2,
            border: 1,
            fontSize: 12,
            position: "relative",
          }}
        >
          Networth
        </Button>
        <Button
          sx={{
            color: "#34A853",
            "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
            mx: 2,
            border: 1,
            fontSize: 12,
            position: "relative",
          }}
        >
          Stock
        </Button>
        <Button
          sx={{
            color: "#34A853",
            "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
            mx: 2,
            border: 1,
            fontSize: 12,
            position: "relative",
          }}
        >
          Spending
        </Button>
        <Button
          sx={{
            color: "#34A853",
            "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
            mx: 2,
            border: 1,
            fontSize: 12,
            position: "relative",
          }}
        >
          Loans
        </Button>
      </Container>
    </>
  );
}

export default Buttons;
