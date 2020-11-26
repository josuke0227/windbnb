import React from "react";
import Icon from "./icon";
import styled from "styled-components";
import FlexItem from "../styled-components/flexItem";

const ButtonContainer = styled.div`
  text-align: -webkit-center;
`;

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  width: 8rem;
  height: 2.5rem;
  border-radius: var(--radius);
  background-color: var(--icon-red);
  box-shadow: var(--shadow);

  &:hover {
    background-color: rgb(214, 0, 0);
    cursor: pointer;
  }
`;

const WhiteSpan = styled.span`
  color: white;
`;

const SearchButtonExpanded = ({ onSearhButtonClick }) => {
  return (
    <ButtonContainer>
      <ButtonStyle onClick={onSearhButtonClick}>
        <FlexItem flex="0.6" style={{ textAlign: "end" }}>
          <Icon name="search" id="expanded-search-button" color="white" />
        </FlexItem>
        <FlexItem style={{ textAlign: "start" }}>
          <WhiteSpan className="label">Search</WhiteSpan>
        </FlexItem>
      </ButtonStyle>
    </ButtonContainer>
  );
};

export default SearchButtonExpanded;
