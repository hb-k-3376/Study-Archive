/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a);
  const a = nums[0] * nums[1] * nums[2];
  const b = nums[0] * nums[nums.length - 1] * nums[nums.length - 2];
  const c = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  return Math.max(a, b, c);
};
