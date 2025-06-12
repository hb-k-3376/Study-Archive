/**
 * @param {number} num
 * @return {number}
 */
// 반복문을 사용한 문제 풀이
var addDigits = function (num) {
  // 10의 자리 까지는 반복문을 돌려 처리를 하고 1의 자리로 내려오면 반복문을 멈춘다.
  while (num >= 10) {
    num = String(num) // 문자열로 변환하고
      .split('') // 배열로 만들고
      .reduce((sum, num) => sum + +num, 0); // sum를 구한다.
  }

  return num;
};

/**
 * @param {number} num
 * @return {number}
 */
// follow up을 구현해보자
var mathWay = function (num) {
  if (num === 0) return 0;

  return num % 9 === 0 ? 9 : num % 9;
};
