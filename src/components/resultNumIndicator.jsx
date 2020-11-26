import React from "react";
import styled from "styled-components";

const ShowCaseCounterText = styled.div`
  flex: 0.3;
  text-align: end;
  color: var(--header-gray);
  font-size: var(--small-font-size);
`;

const ResultNumIndicator = ({ result, stays }) => {
  return (
    <ShowCaseCounterText>
      {!Array.isArray(result) ? "0 Stays" : `${stays.length} Stays`}
    </ShowCaseCounterText>
  );
};

export default ResultNumIndicator;
