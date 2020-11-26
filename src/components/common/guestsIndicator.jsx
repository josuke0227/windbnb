import React from "react";
import styled from "styled-components";

const GuestContainer = styled.div`
  font-size: var(--small-font-size);
  border-right: 1px solid var(--gadget-gray);
  display: flex;
  flex-direction: column;
  padding: 8.4px 1rem 0px 1rem;
  border: ${(props) =>
    props.isOpened && "1px solid var(--winbnb-black) !important"};
  border-radius: ${(props) => props.isOpened && "16px"};

  .guests-expanded:focus {
    border: 1px solid var(--winbnb-black);
  }

  @media (max-width: 620px) {
    border-right: none;
  }
`;

const StyledSpanTitle = styled.span`
  padding-bottom: 0.2rem;
`;

const GuestTextToggler = styled.div`
  color: ${(props) =>
    props.recaps ? "var(--winbnb-black)" : "var(--unfocusd-gray)"};
`;

const GuestsIndicator = ({ onGuestsClicked, recaps, isOpened }) => {
  return (
    <GuestContainer
      id="guests-expanded"
      onClick={onGuestsClicked}
      isOpened={isOpened}
    >
      <StyledSpanTitle id="guests-title">GUESTS</StyledSpanTitle>
      <GuestTextToggler id="guests-text" recaps={recaps}>
        {recaps
          ? recaps.map((guest, index) => (
              <span key={index} id={index}>
                {guest}&nbsp;&nbsp;
              </span>
            ))
          : "Add Guests"}
      </GuestTextToggler>
    </GuestContainer>
  );
};

export default GuestsIndicator;
