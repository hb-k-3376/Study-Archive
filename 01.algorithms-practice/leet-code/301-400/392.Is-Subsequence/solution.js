/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sPointer = 0; // s 포인터

  // t 포인터 및 순회
  for (let tPointer = 0; tPointer < t.length; tPointer++) {
    // 각각의 포인터들의 값이 같다면 s 포인터 카운트 업
    if (s[sPointer] === t[tPointer]) {
      sPointer++;

      // t 배열의 순회가 끝나기도 전에 s 배열의 모든 값을 찾았다면 조기 종료
      if (sPointer === s.length) return true;
    }
  }

  return sPointer === s.length;
};
