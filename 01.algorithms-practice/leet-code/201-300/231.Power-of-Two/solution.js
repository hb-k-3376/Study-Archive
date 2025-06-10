/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 0이거나 음수 인 경우 false 반환
  if (n <= 0) return false;

  // n이 1 보다 큰 경우에만 반복문을 돌린다.
  while (n > 1) {
    // n을 2로 나눴을떼 나머지가 발생한다면 2의 거듭 제곱이 아니다.
    if (n % 2 !== 0) {
      return false;
    }
    // 2로 나누며 n의 값 업데이트
    n /= 2;
  }
  return true;
};
