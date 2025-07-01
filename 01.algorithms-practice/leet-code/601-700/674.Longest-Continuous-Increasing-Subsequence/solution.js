/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let currentLength = 1;
  let max = 0;
  for (let i = 0; i <= nums.length; i++) {
    // 연속된 증가 부분 수열이면?
    if (nums[i] < nums[i + 1]) {
      currentLength++; // 현재 부분수열의 길이 증가
    } else {
      max = Math.max(currentLength, max); // 더 큰 값 저장
      currentLength = 1; // 현재 부분수열 길이를 1로 설정
    }
  }

  return max;
};
