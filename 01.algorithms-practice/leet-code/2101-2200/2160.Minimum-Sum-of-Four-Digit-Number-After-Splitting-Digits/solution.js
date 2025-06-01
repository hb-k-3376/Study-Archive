/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  // 문자열로 변경 후 내침차순 배열로 정렬
  const sortedArr = Array.from(String(num)).sort((a, b) => b - a);

  const [a, b, c, d] = sortedArr; // 구조분해 할당 방식으로 간단하게 자릿수 배치

  return +(d + a) + +(c + b); // 구조분해로 값은 문자 타입이기 때문에 숫자로 타입 변환
};
