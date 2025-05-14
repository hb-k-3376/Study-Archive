/**
 * @param {number} n
 * @return {boolean}
 */
// 투 포인터
var isHappy = function (n) {
  let slow = n; // 느린 포인터
  let fast = getNext(n); // 빠른 포인터

  // 빠른 포인터가 먼저 1에 도달하거나 두 포인터가 같은 값이 되면 종료
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow); // 한바퀴
    fast = getNext(getNext(fast)); // 두바퀴
  }

  return fast === 1;
};

/**
 * 파라미터는 각 자릴수의 제곱을 더한 값을 구하기 위해 받는다.
 * @param {number} n
 * 각 자릿수를 더한 값
 * @return {number}
 */
function getNext(n) {
  let sum = 0; // 다음 계산된 숫자

  while (n > 0) {
    const digits = n % 10; // 1의 자릿수를 구함
    sum += digits * digits; // 1의 자릿수를 제곱하여 합
    n = Math.floor(n / 10); // 1의 자릿수 제거
  }

  return sum;
}
