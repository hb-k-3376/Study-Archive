/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let result = '';
  for (let i = 0; i < s.length; i += k * 2) {
    // Math.min은 마지막이 2k 의 갯수보다 적을 것을 대비하기 위해
    const toReverse = s.slice(i, Math.min(i + k * 2, s.length));
    const rest = s.slice(i + k, i + k * 2);
    result += toReverse.split('').reverse().join('') + rest;
  }

  return result;
};
