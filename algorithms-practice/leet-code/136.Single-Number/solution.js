/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const set = new Set(); // set 선언

  for (let i = 0; i < nums.length; i++) {
    // set에 요소가 있으면 삭제
    if (set.has(nums[i])) {
      set.delete(nums[i]);
      continue;
    }
    // set에 추가
    set.add(nums[i]);
  }

  return [...set][0];
};

var XOR = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};
