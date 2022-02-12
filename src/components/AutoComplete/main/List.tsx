import styled from "@emotion/styled";
import { difference, isEmpty, set } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useKeyPress } from "hooks";
import { useAutoComplete } from "./AutoCompleteContext";
import { ListItem } from "./ListItem";
import { getRenderLabel } from "./utils";

type ListProps = {};

const StyledList = styled.div`
  max-width: 16em;
  width: 100%;
  position: absolute;
  top: 2.8em;
  background: #fff;
  border-radius: 0.5em;
  box-shadow: 0px 0px 12px #eee;
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0px;
  }
`;

const List: React.FC<ListProps> = () => {
  const {
    inputValue,
    onInputValueChange,
    selectedValue,
    onSelectedValueChange,
    options,
    getLabel,
    notSelectedItems,
  } = useAutoComplete();

  // Form Regex to filter options on
  const inputRegex = new RegExp(inputValue || "");

  // Filter based on entered input
  const filtered = notSelectedItems.filter((item, index) => {
    const str = getRenderLabel(item, getLabel);
    return inputRegex.test(str);
  });

  const isOptionShown = !isEmpty(inputValue) && filtered.length !== 0;

  const [cursor, setCursor] = useState<number>(0);

  const isArrowUpKeyPressed = useKeyPress("ArrowUp");
  const isArrowDownKeyPressed = useKeyPress("ArrowDown");
  const isEnterKeyPressed = useKeyPress("Enter");

  // useEffect(() => {
  //   if (cursor === filtered.length - 1) {
  //     setCursor(0);
  //   } else {
  //     setCursor(cursor + 1);
  //   }
  // }, [isArrowDownKeyPressed]);

  if (isOptionShown) {
    return (
      <>
        <StyledList>
          <div className="list">
            <ul>
              {filtered.map((item, index) => {
                return (
                  <ListItem key={index} active={index === cursor} item={item} />
                );
              })}
            </ul>
          </div>
          {cursor}
        </StyledList>
      </>
    );
  } else return <></>;
};

export { List };
