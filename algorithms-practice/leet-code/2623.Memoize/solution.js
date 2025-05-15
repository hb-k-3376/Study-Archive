/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = {};
  let count = 0;

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in args) {
      return cache[key];
    }

    count++;
    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
