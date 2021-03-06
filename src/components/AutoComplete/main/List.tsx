import styled from "@emotion/styled";
import { useKeyPress } from "hooks";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { AddNew } from "./AddNew";
import { useAutoComplete } from "./AutoCompleteContext";
import { ListItem } from "./ListItem";
import { getRenderLabel } from "./utils";

type ListProps = {};

type StyledListProps = {
  isListShown: boolean;
};

const StyledList = styled.div<StyledListProps>`
  width: 14em;
  display: ${(props) => (props.isListShown ? "block" : "none")};
  padding: 0.3em 0em;
  position: absolute;
  top: 170%;
  background: #fff;
  border-radius: 0.6em;
  box-shadow: 0px 0px 12px #ddd;
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0px;
    width 100%;
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
    isListShown,
    toggleListShown,
    openList,
    closeList,
    getValue,
  } = useAutoComplete();

  // Form Regex to filter options on
  const inputRegex = new RegExp(inputValue || "");

  // Filter based on entered input and append a new item based on input
  const filtered = notSelectedItems
    .filter((item, index) => {
      const str = getRenderLabel(item, getLabel);
      return inputRegex.test(str);
    })
    .concat([
      {
        craft: "ISS",
        name: inputValue,
      },
    ]);

  // State to keep track of keyboard nav
  const [cursor, setCursor] = useState<number>(0);

  // Hooks to keep track of keypresses
  const isArrowUpKeyPressed = useKeyPress("ArrowUp");
  const isArrowDownKeyPressed = useKeyPress("ArrowDown");
  const isEnterKeyPressed = useKeyPress("Enter");
  const isEscapeKeyPressed = useKeyPress("Escape");

  useEffect(() => {
    setCursor(0);
  }, [isListShown]);

  // Increase cursor when down key is pressed
  useEffect(() => {
    if (isArrowDownKeyPressed) {
      if (cursor === filtered.length - 1) {
        setCursor(0);
      } else {
        setCursor(cursor + 1);
      }
    }
  }, [isArrowDownKeyPressed]);

  // Decrease cursor when up key is pressed
  useEffect(() => {
    if (isArrowUpKeyPressed) {
      if (cursor === 0) {
        setCursor(filtered.length - 1);
      } else {
        setCursor(cursor - 1);
      }
    }
  }, [isArrowUpKeyPressed]);

  // Close list when user presses escape
  useEffect(() => {
    if (isEscapeKeyPressed) {
      if (isListShown) {
        closeList();
      }
    }
  }, [isEscapeKeyPressed]);

  // Add new item when user presses enter
  useEffect(() => {
    if (isEnterKeyPressed) {
      if (onSelectedValueChange) onSelectedValueChange(filtered[cursor]);
    }
  }, [isEnterKeyPressed]);

  useEffect(() => {
    if (!isEmpty(inputValue)) openList();
    else closeList();
  }, [inputValue]);

  return (
    <>
      <StyledList
        isListShown={isListShown && filtered.length !== 0}
        aria-expanded={!isListShown}
      >
        <ul id="dropdown">
          {filtered.map((item, index) => {
            if (index === filtered.length - 1) {
              return (
                <AddNew key={index} active={index === cursor} item={item} />
              );
            }
            return (
              <ListItem key={index} active={index === cursor} item={item} />
            );
          })}
        </ul>
      </StyledList>
    </>
  );
};

export { List };
