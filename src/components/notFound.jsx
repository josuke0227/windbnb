import React from "react";
import styled from "styled-components";
import TextPrimary from "./styled-components/textPrimary";

const Wrapper = styled.div`
  margin: 0 7rem 0 6rem;
  @media (max-width: 620px) {
    margin: 0 1rem;
  }
`;

const Title = styled.h1`
  color: var(--winbnb-black);
`;

const Span = styled.span`
  color: var(--icon-red);

  &:hover {
    cursor: pointer;
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Title>Sorry,</Title>
      <TextPrimary>
        We couldn't match any stays you're looking for...
      </TextPrimary>
      <TextPrimary>
        Please click
        <Span className="back" onClick={() => window.location.reload()}>
          &nbsp;here&nbsp;
        </Span>
        to reload.
      </TextPrimary>
    </Wrapper>
  );
};

export default NotFound;
