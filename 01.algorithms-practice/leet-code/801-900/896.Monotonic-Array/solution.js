/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isIncrease = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const front = nums[i];
    const rear = nums[i + 1];

    if (front === rear) continue;

    if (isIncrease === 0) {
      isIncrease = front < rear ? 1 : -1;
      continue;
    }

    if (
      (isIncrease === -1 && front < rear) ||
      (isIncrease === 1 && front > rear)
    ) {
      return false;
    }
  }

  return true;
};
