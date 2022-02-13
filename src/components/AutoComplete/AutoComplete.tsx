import styled from "@emotion/styled";
import React from "react";
import { AutoCompleteProps } from "types";
import { AutoCompleteProvider } from "./main/AutoCompleteContext";
import { Chips } from "./main/Chips";
import { Debug } from "./main/Debug";
import { Input } from "./main/Input";

const StyledAutoCompleteContainer = styled.div`
  padding: 0.8em 1.2em;
  width: 42em;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 12px #eee;
  display: flex;
  gap: 0.6em;
  flex-wrap: wrap;
`;

const AutoComplete: React.FC<AutoCompleteProps> = ({
  value,
  onChange,
  options,
  getLabel,
  getValue,
  resetOnSelect,
}) => {
  return (
    <>
      <AutoCompleteProvider
        value={value}
        onChange={onChange}
        options={options}
        getLabel={getLabel}
        getValue={getValue}
        resetOnSelect={resetOnSelect}
      >
        <StyledAutoCompleteContainer>
          <Chips />
          <Input />
        </StyledAutoCompleteContainer>
        {/* <Debug /> */}
      </AutoCompleteProvider>
    </>
  );
};

export { AutoComplete };
