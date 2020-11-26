import React from "react";
import Icon from "./common/icon";
import LocationPanel from "./common/locationPanel";
import LocationSelector from "./common/locationSelector";
import GuestsIndicator from "./common/guestsIndicator";
import GuestsPanel from "./common/guestsPanel";
import SearchButtonExpanded from "./common/searchButtonExpanded";
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

const NavHeaderContainer = styled(FlexContainer)`
  padding-bottom: 0.5rem;
  display: ${(props) => (props.width <= 450 ? "flex" : "none")};
`;

const NavHeader = styled(FlexItem)`
  font-size: var(--small-font-size);
  color: var(--winbnb-black);
`;

const CloseWrapper = styled(FlexItem)`
  text-align: end;
`;

const NavExpanded = ({
  adultGuests,
  childGuests,
  currentWidth,
  isFocused,
  isOpened,
  query,
  recaps,
  stays,
  onExpandedNavClick,
  onGuestNumChanged,
  onGuestsClicked,
  onInputChange,
  onInputFocused,
  onLiClick,
  onSearhButtonClick,
}) => {
  return (
    <React.Fragment>
      <NavHeaderContainer width={currentWidth} xAlign>
        <NavHeader>Edit your search</NavHeader>
        <CloseWrapper>
          <Icon name="close" clickEvent={onExpandedNavClick} id="close" />
        </CloseWrapper>
      </NavHeaderContainer>
      <GridTemplateAreas>
        <GridArea name="windows">
          <PlaceGuestContainer direction="row">
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
          </PlaceGuestContainer>
        </GridArea>
        <GridArea name="search">
          <SearchButtonExpanded onSearhButtonClick={onSearhButtonClick} />
        </GridArea>
        <GridArea name="location">
          <LocationPanel
            currentWidth={currentWidth}
            isFocused={isFocused}
            onLiClick={onLiClick}
            query={query}
            stays={stays}
            onInputChange={onInputChange}
          />
        </GridArea>
        <GridArea name="guests">
          <GuestsPanel
            adultGuests={adultGuests}
            childGuests={childGuests}
            currentWidth={currentWidth}
            isOpened={isOpened}
            onGuestNumChanged={onGuestNumChanged}
          />
        </GridArea>
      </GridTemplateAreas>
    </React.Fragment>
  );
};

export default NavExpanded;
