import React from "react";
import "./Preloader.css";

const PreLoader = () => {
  return (
    <div className="loaderContainer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.22 152.22">
        <title>&#x9875;&#x9762;-1 (3)</title>
        <g fill-rule="evenodd">
          <path
            d="M4.2 63.21l59-59a14.34 14.34 0 0 1 20.28 0 14.34 14.34 0 0 1 0 20.28l-59 59a14.34 14.34 0 0 1-20.28 0 14.34 14.34 0 0 1 0-20.28z"
            fill="#26d3e1"
          />
          <path
            d="M30 89l38.74-38.7a14.34 14.34 0 0 1 20.26 0 14.34 14.34 0 0 1 0 20.28L50.3 109.3a14.34 14.34 0 0 1-20.28 0A14.32 14.32 0 0 1 30 89z"
            fill="#29abe3"
            opacity=".8"
          />
          <path
            d="M50.3 89L89 127.74A14.34 14.34 0 0 1 89 148a14.32 14.32 0 0 1-20.28 0L30 109.3A14.32 14.32 0 0 1 30 89a14.34 14.34 0 0 1 20.3 0z"
            fill="#29b571"
            opacity=".8"
          />
          <path
            d="M30 89a14.34 14.34 0 0 1 20.3 0l10.14 10.16L50.3 109.3a14.34 14.34 0 0 1-20.68-19.86L30 89z"
            fill="#29b571"
            opacity=".8"
          />
        </g>
      </svg>
      <h1>FragAbs</h1>
    </div>
  );
};

export default PreLoader;
