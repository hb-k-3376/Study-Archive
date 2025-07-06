/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const sorted = nums.toSorted((a, b) => b - a);

  const max = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const num = sorted[i];

    if (max < num * 2) {
      return -1;
    }
  }

  return nums.indexOf(max);
};
