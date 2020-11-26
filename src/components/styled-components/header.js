import styled from "styled-components";

const Header = styled.header`
  padding-left: 6rem;
  padding-right: 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 1.5rem;

  @media (max-width: 620px) {
    padding: 0 1rem 1rem 1rem;
  }
`;

export default Header;
