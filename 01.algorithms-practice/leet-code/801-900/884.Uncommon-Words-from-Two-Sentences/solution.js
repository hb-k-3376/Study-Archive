/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const map = new Map();

  for (const c of s1.split(' ')) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  for (const c of s2.split(' ')) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  const answer = [];
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      answer.push(key);
    }
  }
  return answer;
};
