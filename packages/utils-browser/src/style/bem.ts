/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button-text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button-text button-text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

export type Mod = string | Array<Mod> | Record<string, boolean> | undefined;

export type Bem = (el: Mod, mods: Mod) => string;

const genMods = (name: string, mods: Mod): string => {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce((ret: string, item) => ret + genMods(name, item), '');
  }

  return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? genMods(name, key) : ''), '');
};

export const createBEM =
  (name: string): Bem =>
  (el: Mod, mods: Mod): string => {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? `${name}__${el}` : name;

    return `${el}${genMods(el, mods)}`;
  };

export const createRootSpace =
  (root: string) =>
  (name: string): [string, Bem] => {
    const space = `${root}-${name}`;
    return [space, createBEM(space)];
  };
