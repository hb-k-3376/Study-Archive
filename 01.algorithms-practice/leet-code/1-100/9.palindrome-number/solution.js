var isPalindrome = function (x) {
  // x가 음수하면 false
  if (x < 0) return false;
  // x가 0 이면 true
  if (x === 0) return true;
  // x가 0으로 끝나면 false
  if (x % 10 === 0) return false;

  let reverse = 0;
  // x가 reverse 작아질 때 까지 반복
  while (x > reverse) {
    // reverse 값을 x의 맨 뒤의 값에서 부터 차례로 쌓는다.
    reverse = reverse * 10 + (x % 10);
    // x는 맨 뒤 자리 숫자부터 없앤다.
    x = Math.floor(x / 10);
  }
  // Math.floor(reverse/10) <- x의 자릿수가 홀수라면 reverse는 x보다 한자릿수가 더 많기 때문에
  return reverse === x || Math.floor(reverse / 10) === x;
};
