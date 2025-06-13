/**
 * @param {number[]} nums
 * @return {number}
 */
// 가우스의 공식을 이용한 풀이
var missingNumberWithGauss = function (nums) {
  const num = nums.length; // 0 - n 의 배열이기 때문에 length를 구하면 가장 큰 숫자를 구할 수 있다.
  // 이해가 안될수 있지만 0 - n의 배열의 길이는 얼마일까?  n + 1이다
  // 하지만 요소 하나가 빠져있음으로 n + 1 -1 이 기 떄문에 가장 큰 요소는 n이 된다.
  const exceptedSum = (num * (num + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + +num, 0);

  return exceptedSum - actualSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// 가우스의 공식을 이용한 풀이
var missingNumberWithSort = function (nums) {
  nums.sort((a, b) => a - b); // 오름 차순으로 정렬

  //만약 0이 빠진 경우라면 0을 바로 리턴
  if (nums[0] !== 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    // 현재 값 -  이전 값 1보다 크면? 현재값과 이전 값 사이에 값 하나가 누락
    if (nums[i] - nums[i - 1] > 1) {
      return nums[i] - 1;
    }
  }
  // 마지막 값 처리
  return nums.length;
};
