/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  const numStr = String(num);
  let maxDigit = null;
  let minDigit = null;

  // 반복문을 돌려서 앞의 자릿수가 9가인 숫자를 찾는다.
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== '9') {
      maxDigit = numStr[i];
      break;
    }
  }
  // 가장 큰 숫자
  const max = maxDigit ? numStr.replaceAll(maxDigit, '9') : numStr;

  // 반복문을 돌려서 앞의 자릿수가 0가인 숫자를 찾는다.
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== '0') {
      minDigit = numStr[i];
      break;
    }
  }
  // 가장 작은 숫자
  const min = minDigit ? numStr.replaceAll(minDigit, '0') : numStr;

  return +max - +min;
};
