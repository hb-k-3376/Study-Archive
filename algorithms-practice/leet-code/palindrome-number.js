/** Given an integer x, return true if x is a palindrome, and false otherwise. */
var isPalindrome = function (x) {
  // 음수가 아니면 false
  if (x < 0) return false;
  // 0은 true
  if (x === 0) return true;
  // 0으로 긑나는 숫자는 false
  if (x % 10 === 0) return false;

  let reverse = 0;
  while (x > reverse) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reverse === x || x === Math.floor(reverse / 10);
};
/**
 * reverse 변수는 x의 값을 뒤에서 부터 하나씩 쌓아가고 x를 뒤에서 부터 한자리씩 삭제하며 숫자를 비교
 * x > reverse 값이 false가 될 때 까지 반복문을 돌린다. x 는 한자리 숫자씩 삭제하고 reverse 값은 한자리씩 늘어가기 떄문에
 * 절반에서 멈춤 만약 x 의 자릴수가 홀수 일 경우 reverse 값은 x보다 한지리 수가 더 많다.
 *
 * 짝수 자릿 수 일 경우에는 reverse === x 던순 비교
 * 홀수 자랏 수 일 경우에는 x === Math.floor(reverse / 10) 으로 값을 비교
 */
