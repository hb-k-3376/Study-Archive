/**
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 */

var twoSum = function (nums, target) {
  // map을 선언함
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    //보수 구하기
    const complement = target - nums[i];

    // map에 nums[i]값의 보수가 존재한다면 return
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    // map에 해당 값 저장
    map.set(nums[i], i);
  }
};
