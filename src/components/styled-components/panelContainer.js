import styled from "styled-components";

const PanelContainer = styled.div`
  ${(props) =>
    props.status
      ? "display: unset;"
      : props.width <= 450
      ? "display: none;"
      : "visibility: hidden;"}
  margin: 1rem 0;
  padding: 0rem 1rem;
  width: 1fr;
  height: 10rem;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  flex: 1;
`;

// style={
//   isOpened
//     ? null
//     : currentWidth <= 450
//     ? { display: "none" }
//     : { visibility: "hidden" }
// }

export default PanelContainer;
