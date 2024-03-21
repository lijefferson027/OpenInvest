import React, { useState, useEffect } from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box, Grid, IconButton } from "@mui/material";
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

const investment = () => {
  //Toggle Button state manager
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "light",
      locale: "en",
    });

    // Ensure the div for the script is ready in the DOM
    document.getElementById("tradingview-ticker").appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      document.getElementById("tradingview-ticker")?.removeChild(script);
    };
  }, []);
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
          <Grid item position="relative" marginTop={0} marginLeft={3} xs={4.7}>
            {/*Add line chart*/}
            <div className="RateofReturnChart">
              <TradingViewWidget />
            </div>
          </Grid>
          <Grid item position="relative" marginTop={0} marginLeft={50} xs={3}>
            <Box display="flex" justifyContent="flex-center">
              {showExplanation && (
                <Paper className="HelpText" variant="elevation">
                  Trade, sell, buy, and gain insights directly from your portforlio.
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
                      Your Portforlio
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
          <Grid item position="relative" xs={12} >
            {/*Ticker footer component*/}
             <div id="tradingview-ticker" className="tradingview-widget-container"></div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default investment;
