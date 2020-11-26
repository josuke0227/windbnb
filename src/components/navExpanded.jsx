import React from "react";
import LocationPanel from "./common/locationPanel";
import LocationSelector from "./common/locationSelector";
import GuestsIndicator from "./common/guestsIndicator";
import GuestsPanel from "./common/guestsPanel";
import SearchButtonExpanded from "./common/searchButtonExpanded";
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
  adultGuests,
  childGuests,
  isFocused,
  isOpened,
  query,
  recaps,
  stays,
  onGuestsClicked,
  onGuestNumChanged,
  onInputChange,
  onInputFocused,
  onLiClick,
  onSearhButtonClick,
}) => {
  return (
    <React.Fragment>
      <ExpandedSearchPanelStyle>
        <FlexItem>
          <LocationSelector
            isFocused={isFocused}
            query={query}
            onInputChange={onInputChange}
            onInputFocused={onInputFocused}
          />
        </FlexItem>
        <FlexItem>
          <GuestsIndicator
            adultGuests={adultGuests}
            childGuests={childGuests}
            isOpened={isOpened}
            recaps={recaps}
            onGuestsClicked={onGuestsClicked}
          />
        </FlexItem>
        <FlexItem>
          <SearchButtonExpanded onSearhButtonClick={onSearhButtonClick} />
        </FlexItem>
      </ExpandedSearchPanelStyle>
      <FlexContainer direction="row" id="panels">
        {isFocused ? (
          <FlexItem>
            <LocationPanel
              isFocused={isFocused}
              query={query}
              stays={stays}
              onLiClick={onLiClick}
            />
          </FlexItem>
        ) : (
          <FlexItem id="dummy-location"></FlexItem>
        )}
        {isOpened ? (
          <FlexItem>
            <GuestsPanel
              adultGuests={adultGuests}
              childGuests={childGuests}
              isOpened={isOpened}
              onGuestNumChanged={onGuestNumChanged}
            />
          </FlexItem>
        ) : (
          <FlexItem id="dummy-guests"></FlexItem>
        )}

        <FlexItem id="dummy"></FlexItem>
      </FlexContainer>
    </React.Fragment>
  );
};

export default NavExpanded;
