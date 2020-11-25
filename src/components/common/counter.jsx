import React from "react";
import "./counter.css";

const Counter = ({
  title,
  customerAttribution,
  condition,
  count,
  onGuestNumChanged,
}) => {
  return (
    <div className="counter">
      <div className="title">{title}</div>
      <div className="condition">{condition}</div>
      <div className="control-panel" id={customerAttribution}>
        <span className="subtract" id="subtract" onClick={onGuestNumChanged}>
          -
        </span>
        <span className="current-count" id="current-count">
          {count}
        </span>
        <span className="add" id="add" onClick={onGuestNumChanged}>
          +
        </span>
      </div>
    </div>
  );
};

export default Counter;
