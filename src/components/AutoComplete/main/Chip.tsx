import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { useAutoComplete } from "./AutoCompleteContext";
import { getValueAsId } from "./utils";
import CrossIcon from "../../../../public/cross.png";

type ChipProps = {
  item: unknown;
};

const StyledChipContainer = styled.div`
  padding: 0.3em 0.6em;
  display: inline-flex;
  border-radius: 0.5em;
  background: #ededed;
  color: #111;
  font-weight: 500;
  align-items: baseline;
  button {
    padding: 0.08em;
    margin-left: 0.6em;
    border: none;
  }
  button:hover {
    background: #e1e1e1;
  }
`;

const Chip: React.FC<ChipProps> = ({ children, item }) => {
  const { handleRemove, getValue } = useAutoComplete();

  const id = getValueAsId(item, getValue);

  return (
    <>
      <StyledChipContainer>
        {children}
        <button
          type="button"
          aria-label="Remove Selected"
          onClick={() => handleRemove(id)}
        >
          <Image src={CrossIcon} alt="Cross" height="12px" width="12px" />
        </button>
      </StyledChipContainer>
    </>
  );
};

export { Chip };
