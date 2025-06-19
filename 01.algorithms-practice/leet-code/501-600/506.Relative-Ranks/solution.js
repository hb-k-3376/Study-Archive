/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  // 메달도 배열로 만듦
  const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
  // 정렬된 배열 새로 만듬
  const sortedScore = score.toSorted((a, b) => b - a);

  const map = new Map();

  for (let i = 0; i < sortedScore.length; i++) {
    const score = sortedScore[i];
    // 0 - 2 인 값들은 메달을 순차적으로 설정해줌
    map.set(score, i < 3 ? medals[i] : String(i + 1));
  }

  return score.map((point) => map.get(point));
};
