/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  if (max - k <= min + k) {
    return 0;
  }
  return max - k - (min + k);
};
