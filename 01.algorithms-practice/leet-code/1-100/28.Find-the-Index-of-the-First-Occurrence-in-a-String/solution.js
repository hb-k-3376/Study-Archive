/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 슬라이드 윈도우 방법을 문제 해결
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

// 투 포인터로 문제 해결
var towPointer = function (haystack, needle) {
  const m = haystack.length;
  const n = needle.length;

  // needle이 haystack 보다 큰경우
  if (m < n) return -1;
  // 느린 포인터
  for (let i = 0; i <= m - n; i++) {
    // flag
    let found = true;
    for (let k = 0; k < n; k++) {
      // 해방 값이 틀리면 반복문 바로 종료 flag 값 false 초기화
      if (haystack[i + k] !== needle[k]) {
        found = false;
        break;
      }
    }
    // 찾으면 haystack 인덱스 반환
    if (found) {
      return i;
    }
  }
  return -1;
};
