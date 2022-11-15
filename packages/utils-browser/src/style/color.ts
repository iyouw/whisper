const REG_HEX = /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/;
const REG_RGB = /^rgb\((\s*\d+\s*,?){3}\)$/;
const REG_RGBA = /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/;

export function isHex(value: string): boolean {
  return REG_HEX.test(value);
}

export function isRGB(value: string): boolean {
  return REG_RGB.test(value);
}

export function isRGBA(value: string): boolean {
  return REG_RGBA.test(value);
}
