import React from "react";
import Icon from "./common/icon";
import styled from "styled-components";
import FlexContainer from "./styled-components/flexContainer";
import FlexItem from "./styled-components/flexItem";

const SearchPanelContainer = styled(FlexContainer)`
  padding-left: "30rem";
  flex-direction: row;
  border: 1px solid var(--gadget-gray);
  border-radius: 16px;
  height: 3.3rem;

  &:hover {
    box-shadow: var(--shadow);
    border: none;
  }
`;

const SearchPanelWindow = styled(FlexItem)`
  border-right: 1px solid var(--gadget-gray);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SearchPanelWindowEnd = styled(SearchPanelWindow)`
  border-right: none;
`;

const WindowText = styled.div`
  font-size: var(--small-font-size);
  color: ${(props) =>
    !props.content ? "var(--unfocusd-gray)" : "var(--winbnb-black)"};
`;

const SearchPanel = ({
  onSearchPanelClick,
  query,
  onCancelIconClick,
  recaps,
  onSearhButtonClick,
  width,
}) => {
  return (
    <SearchPanelContainer width={width}>
      <SearchPanelWindow onClick={onSearchPanelClick} flex="0.9">
        {query ? (
          <React.Fragment>
            <WindowText content={query}>{query}</WindowText>
            <Icon
              name="cancel"
              id="place"
              size="md-18"
              color="red"
              clickEvent={onCancelIconClick}
            />
          </React.Fragment>
        ) : (
          <WindowText content={query}>Place</WindowText>
        )}
      </SearchPanelWindow>
      {!recaps ? (
        <SearchPanelWindow onClick={onSearchPanelClick}>
          <WindowText content={recaps}>Add Guests</WindowText>
        </SearchPanelWindow>
      ) : (
        recaps.map((recap, index) => (
          <SearchPanelWindow onClick={onSearchPanelClick} key={index}>
            <WindowText content={recaps}>{recap}</WindowText>
            <Icon
              name="cancel"
              id={recap}
              size="md-18"
              clickEvent={onCancelIconClick}
              color="red"
            />
          </SearchPanelWindow>
        ))
      )}
      <SearchPanelWindowEnd flex="0.3">
        <Icon
          name="search"
          id="search-button-default"
          color="red"
          clickEvent={onSearhButtonClick}
        />
      </SearchPanelWindowEnd>
    </SearchPanelContainer>
  );
};

export default SearchPanel;
