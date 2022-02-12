import React from "react";
import { get, isObject, isString } from "lodash";
import { useAutoComplete } from "./AutoCompleteContext";
import { Chip } from "./Chip";
import { getRenderLabel } from "./utils";

type ChipsProps = {};

const Chips: React.FC<ChipsProps> = () => {
  const { selectedValue, getLabel } = useAutoComplete();

  return (
    <>
      {selectedValue?.map((item, index) => {
        return (
          <Chip key={index} item={item}>
            {getRenderLabel(item, getLabel)}
          </Chip>
        );
      })}
    </>
  );
};

export { Chips };
