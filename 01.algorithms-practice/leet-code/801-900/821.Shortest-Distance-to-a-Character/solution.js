/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  // s에 존재하는 c들의 인덱스 구함
  const targetIndex = [...s].reduce((arr, char, idx) => {
    if (char === c) {
      arr.push(idx);
    }
    return arr;
  }, []);

  const answer = [];

  for (let i = 0; i < s.length; i++) {
    let minGap = Infinity;
    for (const target of targetIndex) {
      minGap = Math.min(minGap, Math.abs(i - target));
    }
    answer.push(minGap);
  }

  return answer;
};
