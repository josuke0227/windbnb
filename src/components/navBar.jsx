import logo from "../img/logo.png";
import "./navBar.css";
import React, { useState, useEffect } from "react";
import NavResponsive from "./navResponsive";
import NavExpanded from "./navExpanded";
import guestsRecap from "../util/guestsRecap";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useCurrentWidth() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
}

const NavBar = ({
  isExpanded,
  isFocused,
  onInputFocused,
  stays,
  query,
  onPanelClick,
  onLiClick,
  onGuestNumChanged,
  adultGuests,
  childGuests,
  onGuestsClicked,
  isOpened,
  onWindowScroll,
  onSearhButtonClick,
  onCancelIconClick,
  onInputChange,
}) => {
  const currentWidth = useCurrentWidth();
  const recaps = guestsRecap(adultGuests, childGuests);

  if (isExpanded === true) {
    if (currentWidth < 790)
      return (
        <NavResponsive
          currentWidth={currentWidth}
          isFocused={isFocused}
          onPanelClick={onPanelClick}
          onInputFocused={onInputFocused}
          stays={stays}
          onInputChange={onInputChange}
          query={query}
          onLiClick={onLiClick}
          onGuestNumChanged={onGuestNumChanged}
          adultGuests={adultGuests}
          childGuests={childGuests}
          onGuestsClicked={onGuestsClicked}
          isOpened={isOpened}
          onWindowScroll={onWindowScroll}
          onSearhButtonClick={onSearhButtonClick}
          recaps={recaps}
        />
      );
    return (
      <NavExpanded
        isFocused={isFocused}
        onPanelClick={onPanelClick}
        onInputFocused={onInputFocused}
        stays={stays}
        onInputChange={onInputChange}
        query={query}
        onLiClick={onLiClick}
        onGuestNumChanged={onGuestNumChanged}
        adultGuests={adultGuests}
        childGuests={childGuests}
        onGuestsClicked={onGuestsClicked}
        isOpened={isOpened}
        onWindowScroll={onWindowScroll}
        onSearhButtonClick={onSearhButtonClick}
        recaps={recaps}
      />
    );
  } else {
    return (
      <nav>
        <div className="container">
          <div className="logo">
            <img
              src={logo}
              alt="windbnb-logo"
              onClick={() => window.location.reload()}
            />
          </div>
          <div className="search-panel">
            <div
              onClick={onPanelClick}
              className="place"
              style={query ? { color: "#333333", fontSize: "10px" } : null}
            >
              {query ? (
                <React.Fragment>
                  <span className="content">{query}</span>
                  <span
                    className="material-icons md-18 query-icon"
                    onClick={onCancelIconClick}
                    id="place"
                  >
                    cancel
                  </span>
                </React.Fragment>
              ) : (
                "Place"
              )}
            </div>
            {recaps.map((recap, index) => (
              <div
                onClick={onPanelClick}
                className="guests"
                key={index}
                style={
                  adultGuests || childGuests
                    ? {
                        color: "#333333",
                        fontSize: "10px",
                      }
                    : null
                }
              >
                {
                  <React.Fragment>
                    <span className="content">{recap}</span>
                    {recap === "Add Guests" ? null : (
                      <span
                        id={recap}
                        className="material-icons md-18"
                        onClick={onCancelIconClick}
                      >
                        cancel
                      </span>
                    )}
                  </React.Fragment>
                }
              </div>
            ))}
            <div className="search-button" onClick={onSearhButtonClick}>
              <span className="material-icons md-18">search</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
