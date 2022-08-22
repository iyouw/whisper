type Mods = string | Array<Mods> | Record<string, boolean> | undefined;

function genMods(name: string, mods: Mods): string {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce((ret: string, item) => ret + genMods(name, item), '');
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? genMods(name, key) : ''),
    ''
  );
}

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button-text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button-text button-text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
export const createBEM = (name: string) => (el: string | Mods, mods: Mods) => {
  if (el && typeof el !== 'string') {
    mods = el;
    el = '';
  }

  el = el ? `${name}__${el}` : name;

  return `${el}${genMods(el, mods)}`;
};

export const createNamespace = (root: string) => (name: string) => {
  const space = `${root}-${name}`;
  return [space, createBEM(space)];
};
