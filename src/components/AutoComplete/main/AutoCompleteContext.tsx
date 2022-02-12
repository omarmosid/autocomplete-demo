import { difference } from "lodash";
import React, { createContext, useContext, useState } from "react";
import { AutoCompleteProps, GetLabelType, GetValueType } from "types";
import { getValueAsId } from "./utils";

export type AutoCompleteContextType<T = any> = {
  inputValue?: string;
  selectedValue?: Array<T>;
  options: Array<T>;
  onInputValueChange?: (value: string) => void;
  onSelectedValueChange?: (value: Array<T>) => void;
  getLabel?: GetLabelType<T>;
  getValue?: GetValueType<T>;
  notSelectedItems: Array<T>;
  handleRemove: (id: string) => void;
};

export type AutoCompleteProviderProps = AutoCompleteProps;

export const AutoCompleteContext = createContext<AutoCompleteContextType>({
  inputValue: "",
  selectedValue: [],
  options: [],
  notSelectedItems: [],
  handleRemove: () => {},
});

export const AutoCompleteProvider: React.FC<AutoCompleteProviderProps> = ({
  value: initialValue = [],
  onChange,
  options,
  getLabel,
  getValue,
  resetOnSelect,
  children,
}) => {
  const [inputValue, setInputValue] = useState<string | undefined>("");
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const onInputValueChange = (value?: string) => {
    setInputValue(value);
  };

  const onSelectedValueChange = (value: unknown) => {
    if (resetOnSelect) {
      setInputValue("");
    }
    setSelectedValue([...selectedValue, value]);
  };

  // Exclude items that have been already selected
  const notSelectedItems = difference(options, selectedValue || []);

  const handleRemove = (id: string) => {
    console.log(id)
    const listWithRemovedItem = selectedValue.filter((item) => {
      return id !== getValueAsId(item, getValue);
    });
    console.log(listWithRemovedItem)
    setSelectedValue(listWithRemovedItem);
  };

  return (
    <AutoCompleteContext.Provider
      value={{
        inputValue,
        selectedValue,
        onInputValueChange,
        onSelectedValueChange,
        options,
        getLabel,
        getValue,
        notSelectedItems,
        handleRemove,
      }}
    >
      {children}
    </AutoCompleteContext.Provider>
  );
};

export const useAutoComplete = () => {
  const context = useContext(AutoCompleteContext);
  if (context === undefined) {
    throw new Error(
      "useAutoComplete must be used within a AutoCompleteProvider"
    );
  }
  return context;
};
