import React from "react";
import { AutoCompleteProps } from "types";
import { AutoCompleteConsumer } from "./main/AutoCompleteConsumer";
import { AutoCompleteProvider } from "./main/AutoCompleteContext";

const AutoComplete: React.FC<AutoCompleteProps> = ({
  value,
  onChange,
  options,
  getLabel,
  getValue,
  resetOnSelect,
}) => {
  return (
    <>
      <AutoCompleteProvider
        value={value}
        onChange={onChange}
        options={options}
        getLabel={getLabel}
        getValue={getValue}
        resetOnSelect={resetOnSelect}
      >
        <AutoCompleteConsumer />
      </AutoCompleteProvider>
    </>
  );
};

export { AutoComplete };
