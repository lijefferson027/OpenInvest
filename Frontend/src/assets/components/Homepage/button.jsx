import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "../../../pages/CSS/homepage.css";

function Buttons({ onClick }) {
  const handleClick = (dataType) => {
    if (onClick) {
      onClick(dataType); // Call the onClick function with the dataType argument
    }
  };

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
            fontSize: 15,
            position: "relative",
          }}
          onClick={() => handleClick("UserData")} // Call handleClick with "UserData" as argument
        >
          Networth
        </Button>
        <Button
          sx={{
            color: "#34A853",
            "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
            mx: 2,
            fontSize: 15,
            position: "relative",
          }}
          onClick={() => handleClick("StockData")} // Call handleClick with "StockData" as argument
        >
          Stock
        </Button>
        <Button
          sx={{
            color: "#34A853",
            "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
            mx: 2,
            fontSize: 15,
            position: "relative",
          }}
          onClick={() => handleClick("SpendingData")} // Call handleClick with "SpendingData" as argument
        >
          Spending
        </Button>
        <Button
          sx={{
            color: "#34A853",
            "&:hover": { backgroundColor: "#34A853", color: "#FFF" },
            mx: 2,
            fontSize: 15,
            position: "relative",
          }}
          onClick={() => handleClick("LoanData")} // Call handleClick with "LoanData" as argument
        >
          Loans
        </Button>
      </Container>
    </>
  );
}

export default Buttons;
