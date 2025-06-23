/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const total = mat.length * mat[0].length;

  if (total !== c * r) return mat;

  const merged = mat.reduce((arr, row) => {
    return [...arr, ...row];
  }, []);

  const answer = [];
  let index = 0;
  for (let i = 0; i < r; i++) {
    const row = [];
    for (let j = 0; j < c; j++) {
      row.push(merged[index]);
      index++;
    }
    answer.push(row);
  }
  return answer;
};

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// 더 욱 간경한 방법
var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== c * r) return mat;

  // r개 만큼의 빈배열을 가진 result를 미리 만들어 놓는다.
  const result = Array.from({ length: r }, () => []);

  let row = 0;
  let col = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 반복문을 돌면서 [i][j]를 순차적으로 꺼내고
      // 반복문 밖에서 선언한 row , col를 컨트롤 하면서 재구성한다.
      result[row][col] = mat[i][j];
      col++;

      if (col === c) {
        col = 0;
        row++;
      }
    }
  }

  return result;
};
