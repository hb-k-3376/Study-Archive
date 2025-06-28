/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  // 가우스 합 공식
  const sum = ((1 + nums.length) * nums.length) / 2;

  // 중복 값 찾기
  let duplicate = 0;

  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      duplicate = num;
      break;
    }
    seen.add(num);
  }

  // nums에 중복값을 뺀 값을 sum에 뺴서 missing num 구하기
  const missing = sum - (nums.reduce((sum, num) => sum + num, 0) - duplicate);

  return [duplicate, missing];
};
