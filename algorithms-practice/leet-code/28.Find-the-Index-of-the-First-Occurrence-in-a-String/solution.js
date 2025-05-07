/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return -1;
  const m = haystack.length;
  const n = needle.length;
  // needle 이 haystack보다 크면 -1;
  if (m < n) return -1;

  // haystack와 needle가 정확히 일치 함을 고려 <=
  for (let i = 0; i <= m - n; i++) {
    // 시작 인덱스 i 부터 needle의 length 만큼 잘라내기
    const window = haystack.substring(i, i + n);

    // 잘라낸 window 값을 needle과 비교
    if (needle === window) return i;
  }

  return -1;
};
