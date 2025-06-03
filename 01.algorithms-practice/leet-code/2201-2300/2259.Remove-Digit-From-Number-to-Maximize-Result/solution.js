/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let maxResult = '';

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      // target 과 같은 숫자이면
      // 현재 target을 삭제하고 다시 조합해서 값을 만들고
      const result = number.slice(0, i) + number.slice(i + 1);
      // 문자열로 비교 (같은 길이의 문자열은 사전순 비교가 숫자 크기 비교와 같음)
      if (maxResult < result) {
        maxResult = result;
      }
    }
  }
  return maxResult;
};
