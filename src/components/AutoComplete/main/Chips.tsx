import React from "react";
import { get, isObject, isString } from "lodash";
import { useAutoComplete } from "./AutoCompleteContext";
import { Chip } from "./Chip";
import { getRenderLabel } from "./utils";
import styled from "@emotion/styled";
import { Input } from "./Input";

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
      <StyledChips>
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
