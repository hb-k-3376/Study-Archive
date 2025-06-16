/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      max = Math.max(max, count); // 기존 값과 현재 값 중 더 큰값을 저장
      count = 0; // 카운트 리셋
      continue;
    }
    count++;
  }
  // 마지막 배열의 요소가 1일때 count와 기존 max비교가 안되기 때문에
  // 한번 더 비교 한다.
  return Math.max(max, count);
};
