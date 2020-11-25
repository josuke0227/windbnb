import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.width < 820 ? "column" : "row")};
`;

export default NavContainer;
