/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const jewelsSet = new Set([...jewels]);

  let count = 0;
  for (const stone of stones) {
    if (jewelsSet.has(stone)) {
      count++;
    }
  }

  return count;
};
