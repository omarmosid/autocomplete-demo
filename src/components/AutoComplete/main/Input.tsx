import styled from "@emotion/styled";
import React, { useState } from "react";
import { useAutoComplete } from "./AutoCompleteContext";
import { List } from "./List";

type InputProps = {};

const StyledInputContainer = styled.div`
  position: relative;
  display: inline-flex;
  input {
    display: inline-flex;
    border: none;
    outline: none;
    font-size: 1em;
    width: 100%;
  }
  input::placeholder {
    color: #ddd;
    font-weight: 500;
  }
`;

const Input: React.FC<InputProps> = () => {
  const props = useAutoComplete();

  const {
    inputValue,
    onInputValueChange,
    selectedValue,
    onSelectedValueChange,
  } = props;

  return (
    <>
      <StyledInputContainer>
        <input
          aria-label="autocomplete"
          type="text"
          placeholder="+ Add Astronaut"
          value={inputValue}
          onChange={(e) => {
            if (onInputValueChange) {
              onInputValueChange(e.target.value);
            }
          }}
        />

        <List />
        {/* <pre>{JSON.stringify(props)}</pre> */}
      </StyledInputContainer>
    </>
  );
};

export { Input };
