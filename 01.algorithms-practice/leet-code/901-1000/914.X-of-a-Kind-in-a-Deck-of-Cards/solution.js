/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const map = new Map();

  for (const card of deck) {
    map.set(card, (map.get(card) ?? 0) + 1);
  }

  const min = Math.min(...map.values());

  if (min === 1) return false;

  for (const [_, value] of map.entries()) {
    if (value % min !== 0) return false;
  }
  return true;
};
