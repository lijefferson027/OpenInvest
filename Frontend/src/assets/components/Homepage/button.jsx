import React from "react";
import Button from "@mui/material/Button";

function Buttons() {
  return (
    <>
      <Button
        sx={{
          color: "#34A853",
          "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
        }}
      >
        Networth
      </Button>
      <Button
        sx={{
          color: "#34A853",
          "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
        }}
      >
        Stock
      </Button>
      <Button
        sx={{
          color: "#34A853",
          "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
        }}
      >
        Spending
      </Button>
      <Button
        sx={{
          color: "#34A853",
          "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
        }}
      >
        Loans
      </Button>
      <Button
        sx={{
          color: "#34A853",
          "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
        }}
      >
        Credit Cards
      </Button>
    </>
  );
}

export default Buttons;
