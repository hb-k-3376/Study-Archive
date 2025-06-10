/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 0이거나 음수 인 경우 false 반환
  if (n <= 0) return false;

  // 2 계속 나누다가 홀수가 되면 반복문 끝냄
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
};
