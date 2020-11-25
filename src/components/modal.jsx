import React from "react";

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
              position: "fixed",
              backgroundColor: `rgba(0, 0, 0, ${opacity})`,
              width: "100%",
              height: "100%",
              left: "0",
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
