import { useEffect } from "react";
//For Each page import the Sidebar Component in order to navigate to different pages
import MiniDrawer from "../assets/components/sidebar";
import { Box, Grid } from "@mui/material";
//import Line chart component
import TradingViewWidget from "../assets/components/TradingViewWidget";

const investment = () => {
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
        {/*Navigation component*/}
        <MiniDrawer />
        {/*Market analysis chart component*/}
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
          <Grid item position="relative" marginTop={0} marginLeft={5} xs={4.7}>
            {/*Add line chart*/}
            <div className="RateofReturnChart">
              <TradingViewWidget />
            </div>
          </Grid>
          <Grid item position="relative" xs={12}>
            {/*Ticker footer component*/}
            <div
              id="tradingview-ticker"
              className="tradingview-widget-2"
            ></div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default investment;
