/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  const numStr = String(num);

  // 9가 아닌 가장 앞에있는 숫자를 찾은 다음 9변경하여 최댓값을 찾음
  max = numStr;
  for (const c of numStr) {
    if (c !== '9') {
      max = numStr.replaceAll(c, '9');
      break;
    }
  }
  // 가장 앞에 숫자를 0으로 항상 변경하는게 최솟값을 구하는 방법임.
  min = numStr.replaceAll(numStr[0], '0');

  return +max - +max;
};
