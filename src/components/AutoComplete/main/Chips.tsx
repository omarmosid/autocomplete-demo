import styled from "@emotion/styled";
import React from "react";
import { useAutoComplete } from "./AutoCompleteContext";
import { Chip } from "./Chip";
import { Input } from "./Input";
import { getRenderLabel } from "./utils";

type ChipsProps = {};

const StyledChips = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.6em;
`;

const Chips: React.FC<ChipsProps> = () => {
  const { selectedValue, getLabel } = useAutoComplete();

  return (
    <>
      <StyledChips className="chips">
        {selectedValue?.map((item, index) => {
          return (
            <Chip key={index} item={item}>
              {getRenderLabel(item, getLabel)}
            </Chip>
          );
        })}
        <Input />
      </StyledChips>
    </>
  );
};

export { Chips };
