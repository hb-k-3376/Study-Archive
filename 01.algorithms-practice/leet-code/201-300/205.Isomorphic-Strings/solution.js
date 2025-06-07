/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 우선 주어진 string의 길이가 다르면 false
  if (s.length !== t.length) return false;

  // 교차 검증을 위한 map 생성
  const tMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // 교차 검증
    if (tMap.has(charT) && tMap.get(charT) !== charS) return false;
    if (sMap.has(charS) && sMap.get(charS) !== charT) return false;

    tMap.set(charT, charS);
    sMap.set(charS, charT);
  }
  return true;
};
