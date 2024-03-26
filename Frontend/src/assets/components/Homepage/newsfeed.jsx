import React, { useEffect } from "react";
import "../../../pages/CSS/homepage.css";

const Newsfeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = `
      {
        "feedMode": "all_symbols",
        "isTransparent": false,
        "displayMode": "regular",
        "width": "100%",
        "height": "100%",
        "colorTheme": "light",
        "locale": "en"
      }
    `;
    document
      .querySelector(".tradingview-widget-container__widget")
      .appendChild(script);

    return () => {
      // Clean up script to avoid memory leaks
      document
        .querySelector(".tradingview-widget-container__widget")
        .removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer"
          target="_blank"
        ></a>
      </div>
    </div>
  );
};

export default Newsfeed;
