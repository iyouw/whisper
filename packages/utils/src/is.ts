const { toString } = Object.prototype;

export function isNull(value: any): value is null {
  return toString.call(value) === '[object Null]';
}

export function isUndefined(value: any): value is undefined {
  return toString.call(value) === '[object Undefined]';
}

export function isBoolean(value: any): value is boolean {
  return toString.call(value) === '[object Boolean]';
}

export function isNumber(value: any): value is number {
  return toString.call(value) === '[object Number]';
}

export function isString(value: any): value is string {
  return toString.call(value) === '[object String]';
}

export function isArray<T>(value: any): value is Array<T> {
  return toString.call(value) === '[object Array]';
}

export function isObject(value: any): value is Record<string, unknown> {
  return toString.call(value) === '[object Object]';
}

export function isPromise<T>(value: any): value is Promise<T> {
  return toString.call(value) === '[object Promise]';
}

export function isRegExp(value: any): value is RegExp {
  return toString.call(value) === '[object RegExp]';
}

export function isDate(value: any): value is Date {
  return toString.call(value) === '[object Date]';
}
