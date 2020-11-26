import React from "react";
import styled from "styled-components";

const ModalStyle = styled.div`
  display: ${(props) => !props.isExpanded && "none"};
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: ${(props) => (props.zIndex ? props.zIndex : "0")};
`;

const Modal = ({
  isExpanded,
  opacity,
  zIndex,
  onModalClick,
  onWindowScroll,
}) => (
  <ModalStyle
    isExpanded={isExpanded}
    opacity={opacity}
    zIndex={zIndex}
    onClick={onModalClick}
    onWheel={onWindowScroll}
  ></ModalStyle>
);

export default Modal;
