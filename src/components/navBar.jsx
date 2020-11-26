import React, { useState, useEffect } from "react";
import NavResponsive from "./navResponsive";
import NavExpanded from "./navExpanded";
import guestsRecap from "../util/guestsRecap";
import SearchPanel from "./searchPanel";
import FlexItem from "./styled-components/flexItem";
import styled from "styled-components";
import logo from "../img/logo.svg";
import FlexContainer from "./styled-components/flexContainer";

const FlexLogo = styled(FlexItem)`
  text-align: start;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 820px) {
    margin-bottom: 0.5rem;
  }
`;

const FlexSearchPanel = styled(FlexItem)`
  padding-left: 10rem;

  @media (max-width: 1230px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0%;
  left: 0;
  height: ${(props) =>
    props.isExpanded === true
      ? props.width <= 450
        ? "27rem"
        : "21rem"
      : props.width < 820
      ? "8rem"
      : "5rem"};
  width: 100%;
  background-color: white;
  padding: ${(props) => (props.width <= 620 ? "0 1rem" : "0 7rem 0 6.5rem")};
  padding-top: 1rem;
  z-index: 2;
`;

const NavContainer = styled(FlexContainer)`
  flex-direction: ${(props) => (props.width < 820 ? "column" : "row")};
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
  adultGuests,
  childGuests,
  isExpanded,
  isFocused,
  isOpened,
  stays,
  query,
  onExpandedNavClick,
  onGuestNumChanged,
  onGuestsClicked,
  onInputChange,
  onInputFocused,
  onLiClick,
  onSearhButtonClick,
  onSearchPanelClick,
  onCancelIconClick,
  onWindowScroll,
}) => {
  const currentWidth = useCurrentWidth();
  const recaps = guestsRecap(adultGuests, childGuests);

  const defaultContent = (
    <NavContainer width={currentWidth} xAlign>
      <FlexLogo flex={currentWidth <= 1230 ? "0.6" : "1"}>
        <img
          src={logo}
          alt="windbnb-logo"
          onClick={() => window.location.reload()}
          width="130px"
        />
      </FlexLogo>
      <FlexSearchPanel flex={currentWidth <= 1230 ? "1" : "0.6"}>
        <SearchPanel
          adultGuests={adultGuests}
          childGuests={childGuests}
          query={query}
          recaps={recaps}
          width={currentWidth}
          onCancelIconClick={onCancelIconClick}
          onSearhButtonClick={onSearhButtonClick}
          onSearchPanelClick={onSearchPanelClick}
        />
      </FlexSearchPanel>
    </NavContainer>
  );

  const responsiveLayout = (
    <NavResponsive
      adultGuests={adultGuests}
      childGuests={childGuests}
      currentWidth={currentWidth}
      isFocused={isFocused}
      isOpened={isOpened}
      query={query}
      recaps={recaps}
      stays={stays}
      onExpandedNavClick={onExpandedNavClick}
      onGuestsClicked={onGuestsClicked}
      onGuestNumChanged={onGuestNumChanged}
      onInputChange={onInputChange}
      onInputFocused={onInputFocused}
      onLiClick={onLiClick}
      onSearhButtonClick={onSearhButtonClick}
      onWindowScroll={onWindowScroll}
    />
  );

  const expandedLayout = (
    <NavExpanded
      childGuests={childGuests}
      adultGuests={adultGuests}
      isFocused={isFocused}
      isOpened={isOpened}
      query={query}
      recaps={recaps}
      stays={stays}
      onGuestsClicked={onGuestsClicked}
      onGuestNumChanged={onGuestNumChanged}
      onInputChange={onInputChange}
      onInputFocused={onInputFocused}
      onLiClick={onLiClick}
      onSearhButtonClick={onSearhButtonClick}
      onWindowScroll={onWindowScroll}
    />
  );

  return (
    <Nav
      isExpanded={isExpanded}
      width={currentWidth}
      onClick={onExpandedNavClick}
      onWheel={onWindowScroll}
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
