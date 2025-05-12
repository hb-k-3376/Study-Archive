/**
 * @param {string} s
 * @return {boolean}
 */
// 투포인터 문제
var isPalindromeTwoPointer = function (s) {
  s = s.replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase();
  const len = s.length;
  let start = 0; // 시작 포인터
  let end = len - 1; // 끝 포인터

  while (start < end) {
    // 시작과 끝이 다르다면 false
    if (s[start] !== s[end]) {
      return false;
    }
    // 포인터 이동
    start++;
    end--;
  }

  return true;
};

var isPalindrome = function (s) {
  s = s.replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase();
  const len = s.length;
  let reverse = ''; // 문자열 s의 끝에서 부터 뒤집어 저장할 변수
  // s 문자열의 절반 만 반복
  for (let i = 0; i < Math.floor(len / 2); i++) {
    reverse += s.substring(s.length - 1);
    s = s.substring(0, s.length - 1);
  }
  // 원래 문자열이 짝수면 바로 비교 홀수면 s의 맨 뒷 자리를 제거 후 비교
  return len % 2 === 0 ? s === reverse : s.substring(s.length - 1) === reverse;
};
