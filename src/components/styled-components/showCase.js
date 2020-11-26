import styled from "styled-components";

const ShowCase = styled.main`
  margin: auto;
  width: fit-content;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 15px;
  grid-row-gap: 40px;

  @media (max-width: 1230px) {
    grid-template-columns: auto auto !important;
  }

  @media (max-width: 820px) {
    grid-template-columns: auto !important;
  }
`;

export default ShowCase;
