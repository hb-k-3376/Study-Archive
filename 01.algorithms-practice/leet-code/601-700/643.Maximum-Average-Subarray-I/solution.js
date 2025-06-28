/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = 0;
  for (let i = 0; i < k; i++) {
    max += nums[i];
  }

  let sum = max;

  for (let i = 1; i <= nums.length - k; i++) {
    sum = sum - nums[i - 1] + nums[i + k];
    max = Math.max(max, sum);
  }

  return max / k;
};
