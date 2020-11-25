import styled from "styled-components";

const SearchPanelContainer = styled.div`
  margin: "0 0 0 30rem";
  flex: 1 1;
  display: flex;
  flex-direction: row;
  border: 1px solid #f2f2f2;
  border-radius: 16px;
  height: 3.2rem;

  &:hover {
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border: none;
  }
`;

export default SearchPanelContainer;
