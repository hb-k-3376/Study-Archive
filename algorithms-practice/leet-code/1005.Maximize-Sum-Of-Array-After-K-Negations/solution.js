/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  // 절대값 내림 차순으로 먼저 정렬
  // 절대값으로 정렬하는 이유는?
  // 가장 큰 음수부터 내림차순으로 정렬을 해야 반복문에서 가장 작은 음수 부터 변경할 수 있다.
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      // 지금 요소가 음수이고 k의 횟수가 남아있다면 양수로 변경
      nums[i] = -nums[i]; // 양수로 변경
      k--; // 횟수 차감
    }
  }
  // 횟수가 홀수로 남아있다면 가장 작은 값을 변경해주면 된다.
  if (k % 2 === 1) nums[nums.length - 1] = -nums[nums.length - 1]; // 제일 작은 숫자를 변경

  return nums.reduce((sum, num) => sum + num, 0);
};
