import styled from "@emotion/styled";
import React from "react";

type ChipProps = {
  onCancel?: () => void;
};

const StyledChipContainer = styled.div`
  padding: 0.2em 0.6em;
  display: inline-flex;
  border-radius: 0.5em;
  background: #ededed;
  color: #111;
  font-weight: 500;
`;

const Chip: React.FC<ChipProps> = ({ children, onCancel }) => {
  return (
    <>
      <StyledChipContainer>{children}</StyledChipContainer>
    </>
  );
};

export { Chip };
