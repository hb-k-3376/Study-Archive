/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const cache = {};

  const f = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (cache[n]) {
      return cache[n];
    }
    cache[n] = f(n - 1) + f(n - 2);
    return cache[n];
  };

  return f(n);
};
