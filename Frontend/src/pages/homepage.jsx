import React, { useState } from "react";
import MiniDrawer from "../assets/components/sidebar";
import { Box } from "@mui/material";
import {
  UserData,
  StockData,
  SpendingData,
  LoanData,
} from "../assets/components/Homepage/Data";
import Linechart from "../assets/components/Homepage/chart";
import "./CSS/homepage.css";
import Grid from "@mui/material/Grid";
import Buttons from "../assets/components/Homepage/button";
import Dashcard from "../assets/components/Homepage/card";

const Homepage = () => {
  const [dataToShow, setDataToShow] = useState(UserData); // State variable to track which data to display

  const handleButtonClick = (dataType) => {
    switch (dataType) {
      case "UserData":
        setDataToShow(UserData);
        break;
      case "StockData":
        setDataToShow(StockData);
        break;
      case "SpendingData":
        setDataToShow(SpendingData);
        break;
      case "LoanData":
        setDataToShow(LoanData);
        break;
      default:
        setDataToShow(UserData); // Set default to UserData
        break;
    }
  };

  return (
    <div>
      <MiniDrawer />
      <Grid
        container
        spacing={2}
        className="grid-container"
        sx={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: "100px",
          left: "70px",
        }}
      >
        <Grid
          item
          position="relative"
          marginTop={3}
          marginLeft={3}
          xs="4"
          lg="5"
        >
          <Linechart
            data={{
              labels: dataToShow.map((dataItem) => dataItem.date),
              datasets: [
                {
                  label:
                    dataToShow === UserData
                      ? "Users Networth"
                      : dataToShow === StockData
                      ? "Stock Price"
                      : dataToShow === SpendingData
                      ? "Spending Amount"
                      : "Loan Amount",
                  data: dataToShow.map((dataItem) => dataItem.amount),
                  backgroundColor: [
                    "rgba(52, 168, 83, 0.2)", // Start color (green)
                    "rgba(255, 255, 255, 0.2)", // End color (white)
                  ],
                  borderColor: "#37BE83",
                  tension: 0.1,
                  fill: true,
                  maintainAspectRatio: false,
                },
              ],
            }}
          />
          <Buttons onClick={handleButtonClick} />{" "}
          {/* Pass the click handler to the button component */}
          <Dashcard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
