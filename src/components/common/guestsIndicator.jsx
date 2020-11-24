import React from "react";
import "./guestsIndicator.css";

const GuestsIndicator = ({
  onGuestsClicked,
  adultGuests,
  childGuests,
  recaps,
  isOpened,
}) => {
  return (
    <div
      className="guests-expanded"
      onClick={onGuestsClicked}
      style={
        isOpened ? { border: "1px solid #333333", borderRadius: "16px" } : null
      }
    >
      <span className="guests-title">GUESTS</span>
      <div
        className="text"
        style={
          adultGuests || childGuests
            ? { color: "#333333", fontSize: "10px" }
            : null
        }
      >
        {recaps.map((guest, index) => (
          <span key={index}>{guest}&nbsp;&nbsp;</span>
        ))}
      </div>
    </div>
  );
};

export default GuestsIndicator;
