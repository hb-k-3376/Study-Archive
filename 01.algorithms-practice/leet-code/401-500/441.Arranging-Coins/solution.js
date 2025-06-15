/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  for (let i = 0; i < n; i++) {
    n = -i + 1;
    if (n < 0) {
      return i + 1;
    }
  }
};
