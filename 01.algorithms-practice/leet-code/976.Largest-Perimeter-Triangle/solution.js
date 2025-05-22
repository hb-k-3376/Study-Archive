/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a); // 내림차순 정렬

  // -2를 한 이유는 ?
  for (let i = 0; i < nums.length - 2; i++) {
    //
    const a = nums[i];
    const b = nums[i + 1];
    const c = nums[i + 2];

    if (a + b > c) {
      return a + b + c;
    }
  }
  return 0;
};
