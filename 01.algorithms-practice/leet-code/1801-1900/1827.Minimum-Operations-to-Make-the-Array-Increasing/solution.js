/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let count = 0; // 카운트 변수
  let prev = nums[0]; // 이전 값 저장

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= prev) {
      count += prev - nums[i] + 1; // 이전값과 현재값의 차이는 최소한 +1이 되어야하기 떄문에
      prev++;
    } else {
      prev = nums[i]; // 만약 현재 값이 이전 값보다 크다면 현재값을 이전값으로
    }
  }
  return count;
};
