import React, { useEffect, useRef } from "react";
import "../../../pages/CSS/homepage.css";

const Newsfeed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptId = "tradingview-widget-script";
    const script = document.createElement("script");
    const scriptExists = document.getElementById(scriptId);

    if (!scriptExists) {
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify({
        "feedMode": "all_symbols",
        "isTransparent": false,
        "displayMode": "regular",
        "width": "100%",
        "height": "100%",
        "colorTheme": "light",
        "locale": "en",
        "container_id": "tradingview-widget-container"
      });

      containerRef.current.appendChild(script);
    }

    return () => {
      // Clean up the script to avoid any memory leaks
      const script = document.getElementById(scriptId);
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          
        </a>
      </div>
    </div>
  );
};

export default Newsfeed;
