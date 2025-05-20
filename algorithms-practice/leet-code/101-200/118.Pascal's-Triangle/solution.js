/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    // 이전 로우 를 가져온다.
    const prev = triangle[i - 1];

    const newRow = [1]; // 첫번쨰 요소는 항상 1

    for (let k = 1; k < i; k++) {
      // 이전 요소의 현재 값과 이전 값을 합한다.
      newRow.push(prev[k - 1] + prev[k]);
    }

    newRow.push(1); // 마지막 요소는 항상 1

    triangle.push(newRow);
  }

  return triangle;
};
