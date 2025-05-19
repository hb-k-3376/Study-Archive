/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = {}; // 빈도수를 구하는 맵
  let count = 0;
  // 빈도수
  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  // 빈도수에 홀수가 존재하는지 체크
  // 홀수는 1개만 사용할 수 있다.
  let hasOdd = false;
  for (const value of Object.values(map)) {
    if (value % 2 === 0) {
      count += value;
    } else {
      // 짝수개로 만들어서 카운트
      count += value - 1;
      hasOdd = true;
    }
  }

  return count + (hasOdd ? 1 : 0);
};
