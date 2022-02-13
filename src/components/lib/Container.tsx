import styled from "@emotion/styled";
import React from "react";

type ContainerProps = {};

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export { Container };
