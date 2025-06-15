/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let coins = n;
  for (let i = 0; i < n; i++) {
    coins -= i + 1;

    if (coins === 0) {
      return i + 1;
    }
    if (coins < 0) {
      return i;
    }
  }
};
