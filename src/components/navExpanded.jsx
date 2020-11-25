import React from "react";
import LocationPanel from "./common/locationPanel";
import LocationSelector from "./common/locationSelector";
import GuestsIndicator from "./common/guestsIndicator";
import GuestsPanel from "./common/guestsPanel";
import SearchButtonExpanded from "./common/searchButtonExtended";
import "./navExpanded.css";

const NavExpanded = ({
  isFocused,
  onExpandedNavClick,
  onInputFocused,
  stays,
  onInputChange,
  query,
  onLiClick,
  onGuestNumChanged,
  adultGuests,
  childGuests,
  onGuestsClicked,
  isOpened,
  onWindowScroll,
  onSearhButtonClick,
  recaps,
}) => {
  return (
    <nav
      className="nav-expanded"
      onClick={onExpandedNavClick}
      onWheel={onWindowScroll}
    >
      <div className="search-panel-expanded">
        <LocationSelector
          query={query}
          onInputFocused={onInputFocused}
          onInputChange={onInputChange}
          isFocused={isFocused}
        />
        <GuestsIndicator
          onGuestsClicked={onGuestsClicked}
          adultGuests={adultGuests}
          childGuests={childGuests}
          recaps={recaps}
          isOpened={isOpened}
        />
        <SearchButtonExpanded onSearhButtonClick={onSearhButtonClick} />
      </div>
      <div className="panels">
        <LocationPanel
          isFocused={isFocused}
          stays={stays}
          onLiClick={onLiClick}
          query={query}
        />
        <GuestsPanel
          isOpened={isOpened}
          onGuestNumChanged={onGuestNumChanged}
          adultGuests={adultGuests}
          childGuests={childGuests}
        />
        <div className="dummy"></div>
      </div>
    </nav>
  );
};

export default NavExpanded;
