/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  // 분포도 조시
  for (const char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    // map에 값이 없거나 값이 1보다 작다면 false
    if (!map.has(char) || map.get(char) < 1) return false;
    map.set(char, map.get(char) - 1);
  }

  return true;
};
