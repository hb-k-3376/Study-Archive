/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 만약 x가 0 이나 1 이면 해당 값은 자기 자신이 제곱근임
  if (x < 1) return x;

  // 이진 탐색을 사용할 것이므로 시작과 끝 값을 선언
  let start = 1;
  let end = x;

  let result = 0;

  // start 가 end 보다 커지면 반복문을 멈춘다.
  // <= 를 사용한 이유는 보다 정확한 값을 갖기 위해서이다 < 만 사용하면 start === end 일 때 즉 배열에 el이 하나뿐일때를 감지하지못한다.
  while (start <= end) {
    const mid = (start + end) >> 1;

    // 제곱 mid * mid는 오버플로우를 일으킬수도 있으므로 나누기를 사용한다.
    if (mid <= x / mid) {
      // 딱 나누어 떨어지지 않을 경우 가장 인접한 값을 result에 저장한다.
      // mid <= x/mid 조건에만 인접한 값을 저장하는 이유
      // 제곱근은 항상 x^2 <= n 이 조건을 만족하기 떄문에
      // x^2 <= n 은 x <= n/x 과 같음
      result = mid;
      // mid값 은 이미 start 범위에 포함되지 않음으로 + 1
      start = mid + 1;
    }
    // mid가 제곱근 보다 클 때
    else {
      // mid값 은 이미 end 범위에 포함되지 않음으로 - 1
      end = end - 1;
    }
  }

  return result;
};
