/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const prefixSum = [];
  let sum = 0;
  for (const num of nums) {
    sum = sum + num;
    prefixSum.push(sum);
  }

  for (let i = 0; i < prefixSum.length; i++) {
    const acc = prefixSum[i];

    if (sum - acc === acc - nums[i]) {
      return i;
    }
  }

  return -1;
};
