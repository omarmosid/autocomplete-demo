import { get, isNumber, isObject, isString } from "lodash";
import { GetLabelType, GetValueType } from "types";

export const getRenderLabel = (
  item: unknown,
  getLabel?: GetLabelType<any>
): string => {
  if (isObject(item)) {
    if (getLabel) {
      return getLabel(item);
    } else {
      return get(item, "label", "");
    }
  } else if (isNumber(item)) {
    return item.toString();
  } else if (isString(item)) {
    return item;
  } else {
    return JSON.stringify(item);
  }
};

export const getValueAsId = (
  item: unknown,
  getValue?: GetValueType<any>
): string => {
  console.log('item', item)
  if (isObject(item)) {
    if (getValue) {
      return getValue(item);
    } else {
      return get(item, "value", "");
    }
  } else if (isNumber(item)) {
    return item.toString();
  } else if (isString(item)) {
    return item;
  } else {
    return JSON.stringify(item);
  }
};
