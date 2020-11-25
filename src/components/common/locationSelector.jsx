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
      id="place-expanded"
      style={
        isFocused ? { border: "1px solid #333333", borderRadius: "16px" } : null
      }
    >
      <form className="place-form-expanded" id="place-form">
        <label htmlFor="place-input" id="form-label">
          LOCATION
        </label>
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
