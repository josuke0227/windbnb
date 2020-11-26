import styled from "styled-components";

const PanelContainer = styled.div`
  ${(props) =>
    props.status
      ? "display: block;"
      : props.width <= 450
      ? "display: none;"
      : "visibility: hidden;"}
  margin: 1rem 0;
  padding: 0.6rem;
  height: 11rem;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export default PanelContainer;
