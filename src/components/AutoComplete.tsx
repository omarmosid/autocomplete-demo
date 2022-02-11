import styled from "@emotion/styled";
import React, { useState } from "react";
import { Chip } from "./Chip";
import { Input } from "./Input";

type AutoCompleteProps = {};

const StyledAutoCompleteContainer = styled.div`
  padding: 0.8em 1.2em;
  max-width: 480px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 12px #eee;
  display: flex;
  gap: 0.6em;
  flex-wrap: wrap;
`;

const AutoComplete: React.FC<AutoCompleteProps> = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <StyledAutoCompleteContainer>
        <Chip>React</Chip>
        <Chip>Javascript</Chip>
        {/* <Chip>Node.js</Chip>
        <Chip>Python</Chip> */}
        <Input />
      </StyledAutoCompleteContainer>
    </>
  );
};

export { AutoComplete };
