/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b); // 아이들 오른차순 정렬
  s.sort((a, b) => a - b); // 쿠키 오름차순 정렬

  let childPointer = 0;
  let cookiePointer = 0;

  // 두개의 포인터 중 하나라도 끝까지 돌면 멈춤
  while (childPointer < g.length && cookiePointer < s.length) {
    // 조건 아이가 원하는 쿠키보다 현재 쿠키가 크거나 같은 경우
    if (g[childPointer] <= s[cookiePointer]) {
      childPointer++; // 다음아이로 이동
      cookiePointer++; // 다음 쿠키로 이동
    }
    // 아이가 원하는 쿠키보다 쿠키가 작은 경우
    else {
      cookiePointer++; // 다음 쿠키로 이동
    }
  }

  return childPointer;
};
