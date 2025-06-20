/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const map = {};

  const f = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (map[n]) {
      return map[n];
    }
    map[n] = f(n - 1) + f(n - 2);
    return map[n];
  };

  return f(n);
};
