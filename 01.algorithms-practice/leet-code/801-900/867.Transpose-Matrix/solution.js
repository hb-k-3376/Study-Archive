/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const answer = [];
  for (let i = 0; i < n; i++) {
    const row = matrix[i];
    const transpose = [];

    for (let j = 0; j < m; j++) {
      transpose.push(matrix[j][i]);
    }

    answer.push(transpose);
  }

  return answer;
};
