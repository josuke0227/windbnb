import styled from "styled-components";

const TextPrimary = styled.div`
  color: #333333;
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
`;

export default TextPrimary;
