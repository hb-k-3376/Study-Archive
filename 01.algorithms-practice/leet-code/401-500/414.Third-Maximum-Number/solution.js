/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const set = new Set(nums);

  const sortedArr = [...set].sort((a, b) => b - a);

  return sortedArr.length >= 3 ? sortedArr[2] : sortedArr[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// 가장 최적화 된 Real -time update method
var updateRealTime = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (const num of nums) {
    // 현재 값이 이미 첫번쨰나 두번째 세번째 인경우는 패스
    if (num === first || num === second || num === third) continue;

    // num이 가장 크다면?
    if (num > first) {
      third = second; // 두 번쨰로
      second = first; // 첫 번째를 두 번째로
      first = num; // 가장 큰 수로
    }
    // num이 두번쨰로 크다면?
    else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? first : third;
};
