/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // banned에 있는 모든 단어를 소문자로 변경
  banned = banned.map((word) => word.toLowerCase());
  // 구두점과 공백들을 전부 공백하나로 변경
  const arr = paragraph.match(/[a-zA-Z]+/g);
  // banned set 생성
  const bannedSet = new Set(banned);

  // 분포도를 담을 맵
  const map = new Map();
  for (const word of arr) {
    const lowerWord = word.toLowerCase();
    if (!bannedSet.has(lowerWord)) {
      map.set(lowerWord, (map.get(lowerWord) ?? 0) + 1);
    }
  }

  return [...map.entries()].reduce((maxEntry, currentEntry) =>
    maxEntry[1] > currentEntry[1] ? maxEntry : currentEntry
  )[0];
};
