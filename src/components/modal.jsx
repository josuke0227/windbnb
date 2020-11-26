import React from "react";
import styled from "styled-components";

const ModalStyle = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  z-index: ${(props) => (props.zIndex ? props.zIndex : "0")};
  display: ${(props) => !props.isExpanded && "none"};
  background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = ({
  isExpanded,
  onModalClick,
  onWindowScroll,
  opacity,
  zIndex,
}) => (
  <ModalStyle
    isExpanded={isExpanded}
    zIndex={zIndex}
    onClick={onModalClick}
    onWheel={onWindowScroll}
    opacity={opacity}
  ></ModalStyle>
);

export default Modal;
