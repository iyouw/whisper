export const getType = (value: any): string => Object.prototype.toString.call(value);

export const isNull = (value: any): value is null => getType(value) === '[object Null]';

export const isUndefined = (value: any): value is undefined => getType(value) === '[object Undefined]';

export const isBoolean = (value: any): value is boolean => getType(value) === '[object Boolean]';

export const isNumber = (value: any): value is number => getType(value) === '[object Number]';

export const isString = (value: any): value is string => getType(value) === '[object String]';

export const isArray = <T>(value: any): value is Array<T> => getType(value) === '[object Array]';

export const isObject = (value: any): value is Record<string, any> => getType(value) === '[object Object]';

export const isPromise = <T>(value: any): value is Promise<T> => getType(value) === '[object Promise]';

export const isRegExp = (value: any): value is RegExp => getType(value) === '[object RegExp]';

export const isDate = (value: any): value is Date => getType(value) === '[object Date]';

export const isSymbol = (value: any): value is symbol => getType(value) === '[object Symbol]';

export const isFunction = (value: any): value is CallableFunction => getType(value) === '[object Function]';
