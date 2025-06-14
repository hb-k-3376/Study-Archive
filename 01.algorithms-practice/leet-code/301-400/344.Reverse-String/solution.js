/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let right = s.length - 1; // 맨 오른쪽 요소 포인터

  // left는 맨 왼쪽 포인터로 사용
  for (let left = 0; left < Math.floor(s.length / 2); ) {
    [s[left], s[right]] = [s[right], s[left]];
    left++; // 왼쪽 포인터 이동
    right--; //  오른쪽 포인터 이동
  }

  return s;
};
