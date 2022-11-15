import { isNumber, isObject, isSymbol } from './is';
import { mergeArrayWithDedupe } from './array';

export type ObjectKey = string | number | symbol;

export type ObjectKeyPath = ObjectKey;

export const KEY_DELIMITER = '.';

export const combinePath = (...path: Array<string>): string => path.join(KEY_DELIMITER);

export const getKeyByPath = (path?: string): string | undefined => {
  if (!path) return undefined;
  const lastDelimiterIndex = path.lastIndexOf(KEY_DELIMITER);
  return lastDelimiterIndex === -1 ? path : path.substring(lastDelimiterIndex + 1);
};

export const getParentKeyByPath = (path?: string): string | undefined => {
  if (!path) return undefined;
  const lastDelimiterIndex = path.lastIndexOf(KEY_DELIMITER);
  return lastDelimiterIndex === -1 ? undefined : path.substring(0, lastDelimiterIndex);
};

export const getValueByPath = (data: Record<ObjectKey, any>, path: ObjectKeyPath): any => {
  if (isNumber(path) || isSymbol(path)) {
    return data[path];
  }

  const keys: string[] = path.split(KEY_DELIMITER);
  let i = 0;
  let res: any = data[keys[i++]];
  while (!!res && i < keys.length) {
    res = res[keys[i++]];
  }
  return res;
};

export const setValueByPath = (data: Record<ObjectKey, any>, path: ObjectKeyPath, value: any, force = true): boolean => {
  if (isNumber(path) || isSymbol(path)) {
    data[path] = value;
    return true;
  }

  const keys = path.split(KEY_DELIMITER);
  let i = 0;
  let res = data;
  while (i < keys.length - 1) {
    if (res[keys[i]]) {
      if (force) res[keys[i]] = {};
      else return false;
    }
    res = res[keys[i++]];
  }
  res[keys[i]] = value;
  return true;
};

export const deepMerge = (target: Record<ObjectKey, any>, obj: Record<ObjectKey, any>): Record<ObjectKey, any> => {
  for (const key of Object.keys(obj)) {
    const oldVal = target[key];
    const newVal = obj[key];

    if (Array.isArray(oldVal) && Array.isArray(newVal)) {
      target[key] = mergeArrayWithDedupe(oldVal, newVal);
    } else if (isObject(oldVal) && isObject(newVal)) {
      target[key] = deepMerge(oldVal, newVal);
    } else {
      target[key] = newVal;
    }
  }

  return target;
};
