import React from "react";
import styled from "styled-components";

const IconSpan = styled.span`
  color: ${(props) =>
    props.color === "white"
      ? "white"
      : props.color === "red"
      ? "var(--icon-red)"
      : "var(--winbnb-black)"};
  font-size: ${(props) => (props.size === "md-18" ? "18px" : "24px")};
`;

const Icon = ({ name, id, size, clickEvent, color }) => {
  return (
    <IconSpan
      className="material-icons"
      size={size}
      id={id}
      onClick={clickEvent}
      color={color}
    >
      {name}
    </IconSpan>
  );
};

export default Icon;
