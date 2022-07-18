export function swap<T>(arr: T[] = [], start: number = 0, end: number = 0): T[] {
  const result: Map<any, any> = new Map();
  arr.map((_: any, index: number) => {
    switch (index) {
      case start:
        return result.set(index, arr[end]);
      case end:
        return result.set(index, arr[start]);
      default:
        return result.set(index, arr[index]);
    }
  });
  return Array.from(result.values());
}

export const showElem = (elem: HTMLElement, duration: number = 0.05) => {
  let opacity = 0;
  elem.style.opacity = String(opacity);
  elem.style.display = '';

  const animation = () => {
    opacity += duration;
    elem.style.opacity = String(opacity);

    if (opacity < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export const hideElem = (elem: HTMLElement, duration: number = 0.05, cb?: () => void) => {
  let opacity: number = +getComputedStyle(elem).getPropertyValue('opacity');

  const animation = () => {
    opacity -= duration;
    elem.style.opacity = String(opacity);

    if (opacity > 0) {
      requestAnimationFrame(animation);
    } else {
      elem.style.display = 'none';
      if (cb) {
        cb();
      }
    }
  };

  requestAnimationFrame(animation);
};
