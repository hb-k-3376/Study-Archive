/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 에초에 length가 다르면 아나그램에 부합되지 않습니다.
  if (s.length !== t.length) return false;

  const map = {}; // 분포도 조사

  for (const c of s) {
    map[c] = (map[c] || 0) + 1;
  }
  // 상쇄
  for (const c of t) {
    map[c] = map[c] - 1;
  }

  return Object.values(map).some((v) => v !== 0);
};
