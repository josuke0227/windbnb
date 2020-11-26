import React from "react";
import styled from "styled-components";

const LocationWindowStyle = styled.div`
  border-right: 1px solid var(--gadget-gray);
  font-size: var(--small-font-size);
  padding: 8.4px 1rem 0px 1rem;
  border: ${(props) =>
    props.isFocused && "1px solid var(--winbnb-black) !important"};
  border-radius: ${(props) => props.isFocused && "16px"};

  @media (max-width: 450px) {
    border-bottom: 1px solid var(--gadget-gray);
    border-right: none;
  }
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  padding-bottom: 0.2rem;
`;

const InputStyle = styled.input`
  width: 90%;
  font-size: 100%;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--unfocusd-gray);
  }
`;

const LocationSelector = ({
  query,
  onInputFocused,
  onInputChange,
  isFocused,
}) => {
  return (
    <LocationWindowStyle isFocused={isFocused}>
      <FormStyle
        direction="column"
        id="location-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormLabel htmlFor="place-input" id="form-label">
          LOCATION
        </FormLabel>
        <InputStyle
          type="text"
          id="place-input"
          placeholder="Place"
          value={query}
          onFocus={onInputFocused}
          onChange={onInputChange}
        />
      </FormStyle>
    </LocationWindowStyle>
  );
};

export default LocationSelector;
