/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let step = 0;

  for (let i = 0; i < s.length; ) {
    if (s[i] === 'X') {
      // x를 만나게 되면
      i += 3; // 3칸 이동
      step++; // step 카운트
    }
    // O번 페스
    else {
      i++;
    }
  }
  return step;
};
