import { isNumber, isSymbol } from './is.js';

export const combinePath = (delimiter = '.', ...path: Array<string>): string =>
  path.join(delimiter);

export const getKeyByPath = (
  path?: string,
  delimiter = '.'
): string | undefined => {
  if (!path) return undefined;
  const lastDelimiterIndex = path.lastIndexOf(delimiter);
  return lastDelimiterIndex === -1
    ? path
    : path.substring(lastDelimiterIndex + 1);
};

export const getParentKeyByPath = (
  path?: string,
  delimiter = '.'
): string | undefined => {
  if (!path) return undefined;
  const lastDelimiterIndex = path.lastIndexOf(delimiter);
  return lastDelimiterIndex === -1
    ? undefined
    : path.substring(0, lastDelimiterIndex);
};

export const getValueByPath = (
  data: Record<string | number | symbol, any>,
  path: string | number | symbol,
  delimiter = '.'
): any => {
  if (isNumber(path) || isSymbol(path)) {
    return data[path];
  }

  const keys: string[] = path.split(delimiter);
  let i = 0;
  let res: any = data[keys[i++]];
  while (!!res && i < keys.length) {
    res = res[keys[i++]];
  }
  return res;
};

export const setValueByPath = (
  data: Record<string | number | symbol, any>,
  path: string | number | symbol,
  value: any,
  force = true,
  delimiter = '.'
): boolean => {
  if (isNumber(path) || isSymbol(path)) {
    data[path] = value;
    return true;
  }

  const keys = path.split(delimiter);
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
