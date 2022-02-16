import styled from "@emotion/styled";
import React from "react";
import { useAutoComplete } from "./AutoCompleteContext";
import { Chips } from "./Chips";
import { Input } from "./Input";
import ClickAwayListener from "react-click-away-listener"

type AutoCompleteConsumerProps = {};

const StyledAutoCompleteConsumer = styled.div`
  padding: 0.8em 1.2em;
  width: 42em;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 12px #eee;
  display: flex;
  gap: 0.6em;
  flex-wrap: wrap;
`;

const AutoCompleteConsumer: React.FC<AutoCompleteConsumerProps> = () => {
  const { openList, closeList } = useAutoComplete();

  return (
    <>
      <ClickAwayListener onClickAway={() => closeList()}>
        <StyledAutoCompleteConsumer
          role="combobox"
          onFocus={() => {
            openList();
            console.log("focused");
          }}
        >
          <Chips />
        </StyledAutoCompleteConsumer>
      </ClickAwayListener>
    </>
  );
};

export { AutoCompleteConsumer };
