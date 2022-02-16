import styled from "@emotion/styled";
import { isEmpty } from "lodash";
import React from "react";
import { useAutoComplete } from "./AutoCompleteContext";
import { getRenderLabel } from "./utils";

type AddNewProps<T = any> = {
  active: boolean;
  item: T;
};

const StyledAddNew = styled.div<Pick<AddNewProps, "active">>`
  padding: 0.6em 1em;
  font-weight: 500;
  cursor: pointer;
  background: ${(props) => (props.active ? "#ededed" : "#fff")};
`;

const AddNew: React.FC<AddNewProps> = ({ item, active }) => {
  const {
    getLabel,
    getValue,
    selectedValue,
    onSelectedValueChange,
    openList,
    closeList,
    inputValue,
  } = useAutoComplete();

  const handleClick = () => {
    if (onSelectedValueChange) {
      onSelectedValueChange(item);
    }
    closeList();
  };

  if (isEmpty(inputValue)) {
    return <></>;
  }

  return (
    <StyledAddNew active={active} onClick={handleClick}>
      Add {getRenderLabel(item, getLabel)}
    </StyledAddNew>
  );
};

export { AddNew };
