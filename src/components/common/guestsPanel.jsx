import React from "react";
import Counter from "./counter";
import "./guestsPanel.css";

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
      id="guests-panel"
      style={
        isOpened
          ? null
          : currentWidth <= 450
          ? { display: "none" }
          : { visibility: "hidden" }
      }
    >
      <Counter
        title="Adults"
        customerAttribution="adult"
        condition="Ages 13 or above"
        count={adultGuests}
        onGuestNumChanged={onGuestNumChanged}
      />
      <Counter
        title="Children"
        customerAttribution="child"
        condition="Ages 2 - 12"
        count={childGuests}
        onGuestNumChanged={onGuestNumChanged}
      />
    </div>
  );
};

export default GuestsPanel;
