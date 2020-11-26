import React, { useState, useEffect } from "react";
import Nav from "./styled-components/nav";
import NavContainer from "./styled-components/navContainer";
import FlexItem from "./styled-components/flexItem";
import NavResponsive from "./navResponsive";
import NavExpanded from "./navExpanded";
import guestsRecap from "../util/guestsRecap";
import SearchPanel from "./searchPanel";
import logo from "../img/logo.png";
import styled from "styled-components";

const FlexLogo = styled(FlexItem)`
  text-align: start;

  &:hover {
    cursor: pointer;
  }
`;

const FlexSearchPanel = styled(FlexItem)`
  padding-left: 10rem;

  @media (max-width: 1230px) {
    flex: "1";
    padding-left: 0;
  }
`;

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
      <FlexLogo flex={currentWidth <= 1230 ? "0.6" : "1"}>
        <img
          src={logo}
          alt="windbnb-logo"
          onClick={() => window.location.reload()}
        />
      </FlexLogo>
      <FlexSearchPanel flex={currentWidth <= 1230 ? "1" : "0.6"}>
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
      </FlexSearchPanel>
    </NavContainer>
  );

  const responsiveLayout = (
    <NavResponsive
      currentWidth={currentWidth}
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
