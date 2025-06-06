/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArr = s.split(' ');
  const map = {};

  if (pattern.length !== sArr.length) return false;

  for (let i = 0; i < sArr.length; i++) {
    const p = pattern[i];

    // 새로운 패턴 + 새로운 단어 -> map에 저장
    if (!map[p] && !Object.values(map).includes(sArr[i])) map[p] = sArr[i];

    // 저장된 패턴과 단어가 매칭 x -> false 반환
    if (map[p] !== sArr[i]) return false;
  }
  return true;
};

var useMap = function (pattern, s) {
  const words = s.split(' ');
  const patternMap = new Map();
  const wordsMap = new Map();

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < words.length; i++) {
    const p = pattern[i];
    const word = words[i];
    if (patternMap.has(p) && patternMap.get(p) !== word) return false;
    if (wordsMap.has(word) && wordsMap.get(word) !== p) return false;

    patternMap.set(p, word);
    wordsMap.set(word, p);
  }

  return true;
};
