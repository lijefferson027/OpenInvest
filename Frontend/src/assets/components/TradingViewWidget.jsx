import React, { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // This function checks if the TradingView widget script is already included and initializes the widget
    const initTradingViewWidget = () => {
      if (window.TradingView) {
        // If the TradingView library is already loaded, don't load it again
        return;
      }
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "NASDAQ:AAPL",
        timezone: "Etc/UTC",
        theme: "light",
        style: "3",
        locale: "en",
        enable_publishing: false,
        withdateranges: true,
        range: "1D",
        hide_side_toolbar: false,
        allow_symbol_change: true,
        watchlist: [
          "NASDAQ:TSLA",
          "NASDAQ:NVDA",
          "NASDAQ:AAPL",
          "NASDAQ:AMZN",
          "NASDAQ:GOOGL",
          "NASDAQ:META",
          "NYSE:GME",
        ],
        editablewatchlist:true,
        details: true,
        hotlist: true,
        calendar: false,
        container_id: "tradingview-widget-container",
      });

      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    };

    initTradingViewWidget();
  }, []);

  return (
    <div
      id="tradingview-widget-container"
      ref={containerRef}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
};

export default React.memo(TradingViewWidget);
