import styled from "@emotion/styled";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import { useAutoComplete } from "./AutoCompleteContext";
import { List } from "./List";

type InputProps = {};

const StyledInputContainer = styled.div`
  position: relative;
  display: grid;
  input {
    display: inline-flex;
    flex: 2 1 100%;
    border: none;
    outline: none;
    font-size: 1em;
    // border: 1px solid red;
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
    openList,
    closeList
  } = props;


  const handleChange = (value: string) => {
    if (onInputValueChange) {
      onInputValueChange(value);
    }
  }

  const handleFocus = () => {
    console.log("FOCUSED")
    if (!isEmpty(inputValue)) openList();
  };

  const handleBlur = () => {
    console.log("BLURRED")
    closeList();
  }

  return (
    <>
      <StyledInputContainer>
        <input
          aria-label="autocomplete"
          type="text"
          placeholder="+ Add Astronaut"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={handleFocus}
          // onBlur={handleBlur}
        />

        <List />
      </StyledInputContainer>
    </>
  );
};

export { Input };
