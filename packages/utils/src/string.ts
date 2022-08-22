const REG_WORD = /\B([A-Z])/g;
const REG_FIRST_CHAR = /^./;
const REG_KEBA_WORD = /-(\w)/g;

export function kebablize(string: string): string {
  return string.replace(REG_WORD, '-$1').toLowerCase();
}

export function pascalize(string: string): string {
  return string
    .replace(REG_FIRST_CHAR, (match) => match.toUpperCase())
    .replace(
      REG_KEBA_WORD,
      (_, word: string | undefined) => word?.toUpperCase() ?? ''
    );
}

export function camelize(string: string): string {
  return string
    .replace(REG_FIRST_CHAR, (match) => match.toLowerCase())
    .replace(
      REG_KEBA_WORD,
      (_, word: string | undefined) => word?.toUpperCase() ?? ''
    );
}
