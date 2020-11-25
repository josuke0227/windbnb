import React from "react";
import "./modal.css";

const Modal = ({
  isExpanded,
  onModalClick,
  onWindowScroll,
  opacity,
  zIndex,
}) => {
  return (
    <div
      className="modal"
      style={
        isExpanded
          ? {
              backgroundColor: `rgba(0, 0, 0, ${opacity})`,
              zIndex: `${zIndex}`,
            }
          : { display: "none" }
      }
      onClick={onModalClick}
      onWheel={onWindowScroll}
    ></div>
  );
};

export default Modal;
