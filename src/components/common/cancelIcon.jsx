import React from "react";
import "./cancelIcon.css";

const CancelIcon = ({ onCancelIconClick, id }) => {
  return (
    <span
      className="material-icons md-18 cancel-icon"
      onClick={onCancelIconClick}
      id={id}
    >
      cancel
    </span>
  );
};

export default CancelIcon;
