import styled, { StyledComponent } from "@emotion/styled";
import { get, isNumber, isObject, isString } from "lodash";
import React from "react";
import { useAutoComplete } from "./AutoCompleteContext";
import { getRenderLabel } from "./utils";

type ListItemProps<T = any> = {
  active: boolean;
  item: T;
};

export const StyledListItemContainer = styled.div<Pick<ListItemProps, "active">>`
  padding: 0.6em 1em;
  font-weight: 500;
  cursor: pointer;
  background: ${props => props.active ? "#b7b9f7" : "#fff"}
`;

const ListItem: React.FC<ListItemProps> = ({ active, item }) => {
  const { getLabel, getValue, selectedValue, onSelectedValueChange } =
    useAutoComplete();

  return (
    <>
      <StyledListItemContainer active onClick={() => {
          if(onSelectedValueChange) {
            onSelectedValueChange(item)
          }
      }}>
        {getRenderLabel(item, getLabel)}
      </StyledListItemContainer>
    </>
  );
};

export { ListItem };
