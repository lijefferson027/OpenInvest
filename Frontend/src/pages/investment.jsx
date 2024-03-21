import React, { useState } from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box, ButtonBase, Grid, IconButton } from "@mui/material";
//Import user's holding list
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import ListDivider from "@mui/joy/ListDivider";
import ListSubheader from "@mui/joy/ListSubheader";
import Paper from "@mui/material/Paper";
import HelpIcon from "@mui/icons-material/Help";
import Typography from "@mui/joy/Typography";
//import Line chart component
import TradingViewWidget from "../assets/components/TradingViewWidget";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  Title,
} from "chart.js";

//activate components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  Title
);
const investment = () => {
  //Toggle Button state manager
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer /> {/*Navigation component*/}
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
          <Grid item position="relative" marginTop={3} marginLeft={3} xs={4.7}>
            {/*Add line chart*/}
            <div className="RateofReturnChart">
              <TradingViewWidget />
            </div>
          </Grid>
          <Grid item position="relative" marginTop={3} marginLeft={50} xs={3}>
            <Box display="flex" justifyContent="flex-center">
              {showExplanation && (
                <Paper className="HelpText" variant="elevation">
                  Trade, sell, buy, and gain insights into your current
                  holdings.
                </Paper>
              )}
            </Box>

            {/*Holdings component*/}
            <div>
              <List className="HoldingsStyleList">
                <ListItem>
                  <ListItemContent>
                    <Typography
                      className="Holdingstext"
                      sx={{ color: "black" }}
                    >
                      Your Holdings
                    </Typography>
                  </ListItemContent>
                  <IconButton
                    className="ButtonStyle"
                    onClick={toggleExplanation}
                    size="small"
                  >
                    <HelpIcon
                      fontSize="medium"
                      sx={{
                        color: "#8DDAB8",
                        backgroundColor: "#416454",
                        borderRadius: 3,
                      }}
                    />
                  </IconButton>
                </ListItem>
                <ListItemContent></ListItemContent>
                <ListItem></ListItem>
              </List>
            </div>
          </Grid>
          <Grid item position="relative" marginTop={3} marginLeft={3} xs={12}>
            {/*Watch List component*/}
            <div>Row 2 column 1</div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default investment;
