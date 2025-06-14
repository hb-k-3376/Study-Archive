/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let left = 0;
  let right = s.length - 1;
  s = s.split('');
  while (left < right) {
    // 왼쪽 포인터가 모음이 아닌 경우
    if (!vowels.has(s[left])) {
      left++; // 왼쪽 포인터 이동
    }
    // 오른쪽 포인터가 모음이 아닌 경우
    else if (!vowels.has(s[right])) {
      right--;
    }
    // 두 포인터가 모임인 경우
    else {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }
  return s.join('');
};
