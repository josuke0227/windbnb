import React from "react";
import "./searchButtonExtended.css";

const SearchButtonExpanded = ({ onSearhButtonClick }) => {
  return (
    <div className="search-expanded">
      <button onClick={onSearhButtonClick}>
        <i className="material-icons expanded">search</i>
        <span className="label">Search</span>
      </button>
    </div>
  );
};

export default SearchButtonExpanded;
