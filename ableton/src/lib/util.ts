const debounce = (fn: Function, delay: number) => {
  let timeout: any;
  return function(...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
};
