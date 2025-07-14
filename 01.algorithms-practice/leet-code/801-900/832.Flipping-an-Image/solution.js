/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const answer = [];
  for (const row of image) {
    const reversedRow = row.toReversed().map((item) => item ^ 1);
    answer.push(reversedRow);
  }
  return answer;
};
