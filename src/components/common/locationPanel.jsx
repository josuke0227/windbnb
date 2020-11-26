import React from "react";
import styled from "styled-components";
import Icon from "./icon";
import PanelContainer from "../styled-components/panelContainer";
import placeNameExtracter from "../../util/placeNameExtracter";

const StyledLi = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`;

const StyledSpan = styled.span`
  &:hover {
    border-bottom: 1px solid var(--winbnb-black);
    cursor: pointer;
  }
`;

const LocationPanel = ({
  isFocused,
  stays,
  query,
  currentWidth,
  onLiClick,
}) => {
  const places = stays.map((stay) => {
    return { city: stay["city"], country: stay["country"] };
  });

  let extractedPlaces = placeNameExtracter(places);

  if (query)
    extractedPlaces = extractedPlaces.filter((p) =>
      p.city.toLowerCase().startsWith(query.toLowerCase())
    );

  return (
    <PanelContainer id="location-panel" width={currentWidth} status={isFocused}>
      <ul>
        {extractedPlaces.map((place, index) => (
          <StyledLi key={index} id={index}>
            <Icon name={"location_on"} />
            <StyledSpan
              id="city-name"
              onClick={() => onLiClick(place.city, place.country)}
            >
              {place.city}, {place.country}
            </StyledSpan>
          </StyledLi>
        ))}
      </ul>
    </PanelContainer>
  );
};

export default LocationPanel;
