/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 자릿수의 오른쪽 부터 처리하기 위한 변수
  let i = a.length - 1;
  let k = b.length - 1;
  // 올림 여부
  let carry = 0;

  let answer = '';

  // 이 조건식의 이해가 중요하다
  // i외 K는 각 a,b의 자릿수를 나타내며 carry는 올림의 여부를 나타낸다
  // i와 k의 자릿수는 각각 다를 수 있으므로 따로따로 조건을 확인한다  0 까지 확인하는 이유는 인덱스는 0부터 시작하기 때문
  // carry를 확인 하는 이유는 i와 k의 자릿수를 모두 확인한 후헤도 올림이 되어있을 수 있으므로 올림이 되어있다면 마지막에 1을 더한다.
  // 3개의 조건 중 하나라도 값이 있으면 반복을 한다.
  while (i >= 0 || k >= 0 || carry > 0) {
    // i,k가 0보다 크거나 같다면 아직 연산이 끝나지 않은 값이있다는 뜻
    // 연산이 끝난 a,b는 0으로 표현
    const bitA = i >= 0 ? +a[i] : 0;
    const bitB = k >= 0 ? +b[k] : 0;

    // 각각의 수와 올림을 더한 합을 구한다.
    const sum = bitA + bitB + carry;
    // sum%2 나머지를 구한다. 2일경우는 0을 1이나 3일 경우에는 1을
    answer = (sum % 2) + answer;
    // sum이 2,3일 경우 올림이 존재한다는 뜻
    carry = Math.floor(sum / 2);

    i--;
    k--;
  }

  return answer;
};
