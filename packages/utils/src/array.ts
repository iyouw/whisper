export const mergeArrayWithDedupe = (a: Array<any>, b: Array<any>): Array<any> => Array.from(new Set([...a, ...b]));
