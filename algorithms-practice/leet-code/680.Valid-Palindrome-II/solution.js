/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const isPalindrome = (str, start, end, canDelete) => {
    if (start >= end) return true; // 무사히 끝까지 돌았으면 True;

    // 일치 하면 포인터을 이동해서 다시 진행
    if (str[start] === str[end]) {
      return isPalindrome(str, start + 1, end - 1, canDelete);
    }
    // 위에 로직(일치) 하지 않지만, 삭제의 기회가 있을떄
    if (canDelete) {
      // 앞과 , 다음 뒤 비교
      return isPalindrome(str, start + 1, end, false) || isPalindrome(str, start, end - 1, false);
    }
    // 일치 하지도 않고 기회도 없을떄
    return false;
  };

  return isPalindrome(s, 0, s.length - 1, true);
};
