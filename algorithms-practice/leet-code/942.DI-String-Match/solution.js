/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let max = s.length; // 순열 중 가장 큰 수
  let min = 0; // 가장 작은 수

  const result = [];

  for (let i = 0; i < s.length; i++) {
    // I는 지금 숫자가 가장 작아야 다음 숫자가 어떤 숫자가 오던지  i < i + 1 조건을 만족 시킬 수 있다.
    if (s[i] === 'I') {
      result.push(min++);
    }
    // D는 반대로 가장 큰 수가 나와야 i > i + 1  조건을 만족 시킬 수 있다.
    else {
      result.push(max--);
    }
  }
  // 가장 숫자 처리
  // 순열은 0-n 까지의 숫자로 이루어져있지만, 주어진 문자열은 n-1개 이기 때문에 마지막 인덱스 처리를 해주어야한다.
  // 남아있는 값은 min === max 이기 떄문에 아무 값이 나 넣어도 된다.
  result.push(min);
  return result;
};
