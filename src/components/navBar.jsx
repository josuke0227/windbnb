import React, { useState, useEffect } from "react";
import Nav from "./styled-components/nav";
import NavContainer from "./styled-components/navContainer";
import NavResponsive from "./navResponsive";
import NavExpanded from "./navExpanded";
import guestsRecap from "../util/guestsRecap";
import SearchPanel from "./searchPanel";
import logo from "../img/logo.png";
import "./navBar.css";

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
  onSearchPanelClick,
  onExpandedNavClick,
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

  const defaultContent = (
    <NavContainer width={currentWidth}>
      <div className="logo">
        <img
          src={logo}
          alt="windbnb-logo"
          onClick={() => window.location.reload()}
        />
      </div>
      <SearchPanel
        onSearchPanelClick={onSearchPanelClick}
        query={query}
        onCancelIconClick={onCancelIconClick}
        recaps={recaps}
        adultGuests={adultGuests}
        childGuests={childGuests}
        onSearhButtonClick={onSearhButtonClick}
        width={currentWidth}
      />
    </NavContainer>
  );

  const responsiveLayout = (
    <NavResponsive
      currentWidth={currentWidth}
      onExpandedNavClick={onExpandedNavClick}
      isFocused={isFocused}
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

  const expandedLayout = (
    <NavExpanded
      isFocused={isFocused}
      onExpandedNavClick={onExpandedNavClick}
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
    <Nav
      onClick={onExpandedNavClick}
      onWheel={onWindowScroll}
      width={currentWidth}
      isExpanded={isExpanded}
    >
      {isExpanded === true
        ? currentWidth <= 780
          ? responsiveLayout
          : expandedLayout
        : defaultContent}
    </Nav>
  );
};

export default NavBar;
