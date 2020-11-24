import "./guestsPanel.css";
import React from "react";

const GuestsPanel = ({
  isOpened,
  adultGuests,
  childGuests,
  onGuestNumChanged,
  currentWidth,
}) => {
  return (
    <div
      className="guests-panel"
      style={
        isOpened
          ? null
          : currentWidth <= 450
          ? { display: "none" }
          : { visibility: "hidden" }
      }
    >
      <div className="adults">
        <div className="title">Adults</div>
        <div className="condition">Ages 13 or above</div>
        <div className="control-panel" id="adult">
          <span className="subtract" onClick={onGuestNumChanged}>
            -
          </span>
          <span className="current-count">{adultGuests}</span>
          <span className="add" onClick={onGuestNumChanged}>
            +
          </span>
        </div>
      </div>
      <div className="child">
        <div className="title">Children</div>
        <div className="condition">Ages 2 - 12</div>
        <div className="control-panel" id="child">
          <span className="subtract" onClick={onGuestNumChanged}>
            -
          </span>
          <span className="current-count">{childGuests}</span>
          <span className="add" onClick={onGuestNumChanged}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuestsPanel;
