import React from "react";
import "./modal.css";

const Modal = ({ isExpanded, onModalClick, onWindowScroll }) => {
  return (
    <div
      className="modal"
      style={isExpanded ? null : { display: "none" }}
      onClick={onModalClick}
      onWheel={onWindowScroll}
    ></div>
  );
};

export default Modal;
