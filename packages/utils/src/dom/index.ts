export interface InterRect {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export const getScrollBarWidth = (el: HTMLElement): number =>
  el.tagName === 'BODY'
    ? window.innerWidth -
      (document.documentElement.offsetWidth || document.body.offsetWidth)
    : el.offsetWidth - el.clientWidth;

export const getRelativeRect = (
  target: HTMLElement,
  relative: HTMLElement
): InterRect => {
  const targetRect = target.getBoundingClientRect();
  const relativeRect = relative.getBoundingClientRect();

  return {
    top: targetRect.top - relativeRect.top,
    bottom: relativeRect.bottom - targetRect.bottom,
    left: targetRect.left - relativeRect.left,
    right: relativeRect.right - targetRect.right,
    width: targetRect.width,
    height: targetRect.height,
  };
};
