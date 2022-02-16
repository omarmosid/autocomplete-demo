import styled, { StyledComponent } from "@emotion/styled";
import { get, isNumber, isObject, isString } from "lodash";
import React, { useEffect } from "react";
import { useAutoComplete } from "./AutoCompleteContext";
import { getRenderLabel } from "./utils";

type ListItemProps<T = any> = {
  active: boolean;
  item: T;
};

export const StyledListItemContainer = styled.li<Pick<ListItemProps, "active">>`
  padding: 0.6em 1em;
  font-weight: 500;
  cursor: pointer;
  background: ${(props) => (props.active ? "#ededed" : "#fff")};
`;

const ListItem: React.FC<ListItemProps> = ({ active, item }) => {
  const {
    getLabel,
    getValue,
    selectedValue,
    onSelectedValueChange,
    openList,
    closeList,
  } = useAutoComplete();

  const handleClick = () => {
    if (onSelectedValueChange) {
      onSelectedValueChange(item);
    }
    closeList();
  };

  return (
    <>
      <StyledListItemContainer active={active} onClick={handleClick} className="list-item">
        {getRenderLabel(item, getLabel)}
      </StyledListItemContainer>
    </>
  );
};

export { ListItem };
