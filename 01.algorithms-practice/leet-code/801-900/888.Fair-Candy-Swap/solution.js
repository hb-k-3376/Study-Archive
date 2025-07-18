/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const bobSum = bobSizes.reduce((sum, num) => sum + num, 0);
  const aliceSum = aliceSizes.reduce((sum, num) => sum + num, 0);
  const target = (bobSum + aliceSum) / 2;

  const bobMap = new Map();

  for (let i = 0; i < bobSizes.length; i++) {
    const size = bobSizes[i];
    bobMap.set(size, i);
  }

  for (let i = 0; i < aliceSizes.length; i++) {
    const size = aliceSizes[i];
    const rest = target - aliceSum + size;

    if (bobMap.has(rest)) {
      return [size, rest];
    }
  }
};
