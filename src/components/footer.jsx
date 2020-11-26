import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const FooterText = styled.div`
  border-top: 1px solid var(--text-color);
  padding-top: 1rem;
  display: inline;
  color: var(--text-color);
  font-size: var(--ss-font-size);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Josuke0227 @ DevChallenges.io</FooterText>
    </FooterContainer>
  );
};

export default Footer;
