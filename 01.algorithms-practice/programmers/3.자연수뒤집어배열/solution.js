export {};

function solution(n) {
  return String(n)
    .split('')
    .reduce((sum, cur) => sum + +cur, 0);
}

/**
 * 먼저 n을 문자열로 변환 후 배열로 스플릿 리듀서로 합을 구했다.
 */
