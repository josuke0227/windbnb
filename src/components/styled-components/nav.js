import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0%;
  left: 0;
  height: ${(props) =>
    props.isExpanded === true
      ? props.width <= 450
        ? "23rem"
        : "20rem"
      : props.width < 820
      ? "7rem"
      : "5rem"};
  width: 100%;
  background-color: white;
  padding: ${(props) => (props.width < 620 ? "0 1rem" : "0 6rem")};
  padding-top: 1rem;
  z-index: 2;
`;

export default Nav;
