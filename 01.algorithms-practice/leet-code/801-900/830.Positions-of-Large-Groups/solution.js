/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let start = 0;
  const answer = [];
  for (let i = 1; i < s.length; i++) {
    if (s[start] !== s[i]) {
      if (i - start - 1 >= 2) {
        answer.push([start, i - 1]);
      }
      start = i;
    }
  }
  if (s.length - 1 - start >= 2) {
    answer.push([start, s.length - 1]);
  }
  return answer;
};
