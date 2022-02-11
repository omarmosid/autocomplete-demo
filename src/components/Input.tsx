import styled from "@emotion/styled";
import React from "react";
import { List } from "./List";

type InputProps = {};

const StyledInputContainer = styled.div`
  position: relative;
  display: inline-flex;
  input {
    border: none;
    outline: none;
    font-size: 1em;
  }
  input::placeholder {
    color: #ddd;
    font-weight: 500;
  }
`;

const Input: React.FC<InputProps> = () => {
  return (
    <>
      <StyledInputContainer>
        <input
          aria-label="autocomplete"
          type="text"
          placeholder="Add Astronaut"
        />

        <List />
      </StyledInputContainer>
    </>
  );
};

export { Input };
