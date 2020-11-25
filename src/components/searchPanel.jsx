import React from "react";
import CancelIcon from "./common/cancelIcon";

const SearchPanel = ({
  onSearchPanelClick,
  query,
  onCancelIconClick,
  recaps,
  adultGuests,
  childGuests,
  onSearhButtonClick,
}) => {
  return (
    <div className="search-panel">
      <div
        onClick={onSearchPanelClick}
        className="place"
        style={query ? { color: "#333333", fontSize: "14px" } : null}
      >
        {query ? (
          <React.Fragment>
            <span className="content">{query}</span>
            <CancelIcon id="place" onCancelIconClick={onCancelIconClick} />
          </React.Fragment>
        ) : (
          "Place"
        )}
      </div>
      {recaps.map((recap, index) => (
        <div
          onClick={onSearchPanelClick}
          className="guests"
          key={index}
          style={
            adultGuests || childGuests
              ? {
                  color: "#333333",
                  fontSize: "14px",
                }
              : null
          }
        >
          {
            <React.Fragment>
              <span className="content">{recap}</span>
              {recap === "Add Guests" ? null : (
                <CancelIcon id={recap} onCancelIconClick={onCancelIconClick} />
              )}
            </React.Fragment>
          }
        </div>
      ))}
      <div
        className="search-button"
        id="search-button"
        onClick={onSearhButtonClick}
      >
        <span className="material-icons md-18">search</span>
      </div>
    </div>
  );
};

export default SearchPanel;
