/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;

  let carry = 0;
  let answer = '';
  while (p1 >= 0 || p2 >= 0) {
    // 뒤에서 부터 연산 올림이 있으면 올림도 포함
    const value = Number(num1[p1] ?? 0) + Number(num2[p2] ?? 0) + carry;
    // 연산 값이 9이상이면 올림이있음
    carry = value > 9 ? 1 : 0;

    answer = (carry === 1 ? value - 10 : value) + answer;

    p1--;
    p2--;
  }

  if (carry === 1) {
    return String(carry) + answer;
  }
  return answer;
};
