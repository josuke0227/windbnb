import React from "react";
import "./resultNumIndicator.css";

const ResultNumIndicator = ({ result, stays }) => {
  return (
    <div className="stays-counter">
      {!Array.isArray(result) ? "0 Stays" : `${stays.length} Stays`}
    </div>
  );
};

export default ResultNumIndicator;
