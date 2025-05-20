/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 주어진 digits의 가장 첫번 쨰 자릿수 부터 앞으로 반복하며 계산한다.
  for (let i = digits.length - 1; i >= 0; i--) {
    // 현재 자릿수가 9보다 작으면 +1 을 해주고 결과값을 리턴
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    // 9이면 0으로 설정 후 다음 값으로
    else {
      digits[i] = 0;
    }
  }

  // 반복문이 전부 돌았지만 값을 값 결과가 리턴이 안되어있다면
  // 모든값이 9 였으므로 가장 앞에 1을 추가해준다.
  digits.unshift(1);
  return digits;
};
