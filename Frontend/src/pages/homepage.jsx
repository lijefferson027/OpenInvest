import React, { useState } from "react";
import MiniDrawer from "../assets/components/sidebar";
import { Box } from "@mui/material";
import { UserData } from "../assets/components/Homepage/Data";
import Linechart from "../assets/components/Homepage/chart";
import "./CSS/homepage.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Buttons from "../assets/components/Homepage/button";

const Homepage = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: "Users Networth",
        data: UserData.map((data) => data.amount),
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
  });

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
        <Grid item position="relative" marginTop={3} marginLeft={3} xs="4">
          <Linechart data={userData} />
          <Buttons />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
