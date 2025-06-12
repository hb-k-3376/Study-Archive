/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  // 음수와 0은 미리 조건으로 걸리준다.
  if (n <= 0) return false;
  // n이 1이나 그 이하가 된다면 반복문을 멈춘다.
  while (n > 1) {
    // 먼저 2로 나눠보고
    if (n % 2 === 0) n /= 2;
    // 3으로 나눠보고
    else if (n % 3 === 0) n /= 3;
    // 5로 나눠보고
    else if (n % 5 === 0) n /= 5;
    // 안되면 반복문을 멈춘다.
    else break;
  }
  // n이 1이면 true
  return n === 1;
};
