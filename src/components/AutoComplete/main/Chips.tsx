import React from "react";
import { get, isObject, isString } from "lodash";
import { useAutoComplete } from "./AutoCompleteContext";
import { Chip } from "./Chip";

type ChipsProps = {};

const Chips: React.FC<ChipsProps> = () => {
  const { selectedValue, getLabel } = useAutoComplete();

  return (
    <>
      {selectedValue?.map((item, index) => {
        if (isString(item)) {
          return <Chip key={index}>{item}</Chip>;
        } else if (isObject(item)) {
          if (getLabel) {
            return <Chip key={index}>{getLabel(item)}</Chip>;
          } else {
            return <Chip key={index}>{get(item, "label", "")}</Chip>;
          }
        }
      })}
    </>
  );
};

export { Chips };
