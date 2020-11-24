import React from "react";
import "./locationSelector.css";

const LocationSelector = ({
  query,
  onInputFocused,
  onInputChange,
  isFocused,
}) => {
  return (
    <div
      className="place-expanded"
      style={
        isFocused ? { border: "1px solid #333333", borderRadius: "16px" } : null
      }
    >
      <form className="place-form-expanded">
        <label htmlFor="place-input">LOCATION</label>
        <input
          type="text"
          id="place-input"
          placeholder="Place"
          value={query}
          onFocus={onInputFocused}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default LocationSelector;
