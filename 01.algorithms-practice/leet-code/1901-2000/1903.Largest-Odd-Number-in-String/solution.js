/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  // 가장 맨 뒤 인덱스부터 -1 해가면서 반복문을 돌린다.
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num % 2 !== 0) {
      // 가장 뒤에 있는 인덱스의 숫자가 홀수면
      return num.slice(0, i + 1); // 문자열 자르기로 인덱스 0 부터 해당 인덱스 까지 보이게 자르면 된다.
    }
  }
  return ''; // 홀수가 없으면 빈문자열 return
};
