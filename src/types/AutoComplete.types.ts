export type GetLabelType<T = any> = (item: T) => string;

export type GetValueType<T = any> = (item: T) => string;

export type AutoCompleteProps<T = any> = {
  value?: Array<T>;
  onChange?: (newValue: T) => void;
  options: Array<any>;
  isLoading?: boolean;
  getLabel?: GetLabelType<T>;
  getValue?: GetValueType<T>;
  resetOnSelect?: boolean;
};
