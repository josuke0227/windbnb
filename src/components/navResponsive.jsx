import React from "react";
import LocationPanel from "./common/locationPanel";
import LocationSelector from "./common/locationSelector";
import GuestsIndicator from "./common/guestsIndicator";
import GuestsPanel from "./common/guestsPanel";
import SearchButtonExpanded from "./common/searchButtonExtended";
import FlexContainer from "./styled-components/flexContainer";
import FlexItem from "./styled-components/flexItem";
import styled from "styled-components";

const GridTemplateAreas = styled.div`
  display: grid;
  grid-template-areas:
    "windows windows"
    "location guests"
    "search search";

  @media (max-width: 450px) {
    grid-template-areas:
      "windows"
      "location"
      "guests"
      "search";
  }
`;

const GridArea = styled.div`
  grid-area: ${(props) => props.name};
`;

const PlaceGuestContainer = styled(FlexContainer)`
  border-radius: var(--radius);
  height: 3.3rem;
  box-shadow: var(--shadow);

  @media (max-width: 450px) {
    height: 6.6rem;
    flex-direction: column;
  }
`;

const NavExpanded = ({
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
    <GridTemplateAreas>
      <GridArea name="windows">
        <PlaceGuestContainer direction="row">
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
              recaps={recaps}
              onGuestsClicked={onGuestsClicked}
              adultGuests={adultGuests}
              childGuests={childGuests}
              isOpened={isOpened}
            />
          </FlexItem>
        </PlaceGuestContainer>
      </GridArea>
      <GridArea name="search">
        <SearchButtonExpanded onSearhButtonClick={onSearhButtonClick} />
      </GridArea>
      <GridArea name="location">
        <LocationPanel
          isFocused={isFocused}
          stays={stays}
          onLiClick={onLiClick}
          query={query}
          currentWidth={currentWidth}
          onInputChange={onInputChange}
        />
      </GridArea>
      <GridArea name="guests">
        <GuestsPanel
          isOpened={isOpened}
          onGuestNumChanged={onGuestNumChanged}
          adultGuests={adultGuests}
          childGuests={childGuests}
          currentWidth={currentWidth}
        />
      </GridArea>
    </GridTemplateAreas>
  );
};

export default NavExpanded;
