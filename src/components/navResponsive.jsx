import React from "react";
import LocationPanel from "./common/locationPanel";
import LocationSelector from "./common/locationSelector";
import GuestsIndicator from "./common/guestsIndicator";
import GuestsPanel from "./common/guestsPanel";
import SearchButtonExpanded from "./common/searchButtonExtended";
import "./navResponsive.css";

const NavExpanded = ({
  onExpandedNavClick,
  onWindowScroll,
  query,
  onInputFocused,
  onInputChange,
  onGuestsClicked,
  adultGuests,
  childGuests,
  onSearhButtonClick,
  isFocused,
  onLiClick,
  onGuestNumChanged,
  stays,
  isOpened,
  currentWidth,
  recaps,
}) => {
  return (
    <nav
      className="nav-responsive"
      onWheel={onWindowScroll}
      onClick={onExpandedNavClick}
    >
      <div className="selectors">
        <div className="windows">
          <LocationSelector
            query={query}
            onInputFocused={onInputFocused}
            onInputChange={onInputChange}
            isFocused={isFocused}
          />
          <GuestsIndicator
            recaps={recaps}
            onGuestsClicked={onGuestsClicked}
            adultGuests={adultGuests}
            childGuests={childGuests}
            isOpened={isOpened}
          />
        </div>
        <SearchButtonExpanded onSearhButtonClick={onSearhButtonClick} />
        <LocationPanel
          isFocused={isFocused}
          stays={stays}
          onLiClick={onLiClick}
          query={query}
          currentWidth={currentWidth}
          onInputChange={onInputChange}
        />
        <GuestsPanel
          isOpened={isOpened}
          onGuestNumChanged={onGuestNumChanged}
          adultGuests={adultGuests}
          childGuests={childGuests}
          currentWidth={currentWidth}
        />
      </div>
    </nav>
  );
};

export default NavExpanded;
