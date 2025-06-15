/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = new Map();

  for (const c of s) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (map.get(t[i])) map.set(t[i], map.get(t[i]) - 1);

    if (!map.has(t[i]) || map.get(t[i]) < 1) {
      return t[i];
    }
  }
};
