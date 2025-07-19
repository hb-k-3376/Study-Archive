/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isIncrease = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const front = nums[i];
    const rare = nums[i + 1];

    if (front === rare) continue;

    if (isIncrease === 0) {
      isIncrease = front < rare ? 1 : -1;
      continue;
    }

    if (
      (isIncrease === -1 && front < rare) ||
      (isIncrease === 1 && front > rare)
    ) {
      return false;
    }
  }

  return true;
};
