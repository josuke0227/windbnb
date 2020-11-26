import React from "react";
import LocationPanel from "./common/locationPanel";
import LocationSelector from "./common/locationSelector";
import GuestsIndicator from "./common/guestsIndicator";
import GuestsPanel from "./common/guestsPanel";
import SearchButtonExpanded from "./common/searchButtonExtended";
import styled from "styled-components";
import FlexContainer from "./styled-components/flexContainer";
import FlexItem from "./styled-components/flexItem";

const ExpandedSearchPanelStyle = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  box-shadow: var(--shadow);
  border: none;
  border-radius: var(--radius);
  height: 3.3rem;
`;

const NavExpanded = ({
  isFocused,
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
  onSearhButtonClick,
  recaps,
}) => {
  return (
    <React.Fragment>
      <ExpandedSearchPanelStyle>
        <FlexItem>
          <LocationSelector
            query={query}
            onInputFocused={onInputFocused}
            onInputChange={onInputChange}
            isFocused={isFocused}
          />
        </FlexItem>
        <FlexItem>
          <GuestsIndicator
            onGuestsClicked={onGuestsClicked}
            adultGuests={adultGuests}
            childGuests={childGuests}
            recaps={recaps}
            isOpened={isOpened}
          />
        </FlexItem>
        <FlexItem>
          <SearchButtonExpanded onSearhButtonClick={onSearhButtonClick} />
        </FlexItem>
      </ExpandedSearchPanelStyle>
      <FlexContainer direction="row" id="panels">
        <FlexItem>
          <LocationPanel
            isFocused={isFocused}
            stays={stays}
            onLiClick={onLiClick}
            query={query}
          />
        </FlexItem>
        <FlexItem>
          <GuestsPanel
            isOpened={isOpened}
            onGuestNumChanged={onGuestNumChanged}
            adultGuests={adultGuests}
            childGuests={childGuests}
          />
        </FlexItem>
        <FlexItem id="dummy"></FlexItem>
      </FlexContainer>
    </React.Fragment>
  );
};

export default NavExpanded;
