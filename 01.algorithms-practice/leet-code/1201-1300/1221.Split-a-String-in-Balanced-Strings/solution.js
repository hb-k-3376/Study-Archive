/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let rCount = 0,
    lCount = 0,
    answer = 0;

  for (const c of s) {
    if (c === 'L') {
      lCount++;
    } else {
      rCount++;
    }

    if (lCount === rCount) answer++;
  }

  return answer;
};
