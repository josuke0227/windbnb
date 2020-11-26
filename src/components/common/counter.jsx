import React from "react";
import styled from "styled-components";

const CounterWrapper = styled.div`
  margin-top: 0rem;
`;

const StyledDivTitle = styled.div`
  margin-top: 0.5rem;
  font-size: var(--small-font-size);
  font-weight: 600;
  color: var(--winbnb-black);
`;

const StyledDivCondition = styled.div`
  color: var(--unfocusd-gray);
  font-size: var(--small-font-size);
  margin-bottom: 0.7rem;
`;

const ButtonStyle = styled.span`
  border: 1px solid var(--text-color);
  color: var(--text-color);
  padding: 0 6.475px 0;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: var(--gadget-gray);
  }
`;

const Counter = ({
  title,
  customerAttribution,
  condition,
  count,
  onGuestNumChanged,
}) => {
  return (
    <CounterWrapper>
      <StyledDivTitle>{title}</StyledDivTitle>
      <StyledDivCondition>{condition}</StyledDivCondition>
      <div className="control-panel" id={customerAttribution}>
        <ButtonStyle id="subtract" onClick={onGuestNumChanged}>
          -
        </ButtonStyle>
        <span>&nbsp;{count}&nbsp;</span>
        <ButtonStyle id="add" onClick={onGuestNumChanged}>
          +
        </ButtonStyle>
      </div>
    </CounterWrapper>
  );
};

export default Counter;
