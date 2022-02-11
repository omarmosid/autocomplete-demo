import styled from "@emotion/styled";
import React from "react";

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
  return (
    <>
      <StyledList>
        <div className="list">
          <ul>
            <li>Test1</li>
            <li>Test2</li>
            <li>Test3</li>
            <li>Test4</li>
          </ul>
        </div>
      </StyledList>
    </>
  );
};

export { List };
