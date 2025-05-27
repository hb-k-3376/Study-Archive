export {};

function solution(n) {
  return String(n).split('').reverse().map(Number);
}

/**
 * 먼저 n을 문자열로 변환 후 배열로 reverse() 로 뒤집고 문자열로 변환
 */
