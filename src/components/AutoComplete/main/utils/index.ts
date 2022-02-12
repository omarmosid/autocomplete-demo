import { get, isNumber, isObject, isString } from "lodash";
import { GetLabelType } from "types";

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
