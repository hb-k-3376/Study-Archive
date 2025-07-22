/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const map = new Map();

  for (const card of deck) {
    map.set(card, (map.get(card) ?? 0) + 1);
  }

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const counts = [...map.values()];
  let result = counts[0];

  for (let i = 1; i < counts.length; i++) {
    result = gcd(result, counts[i]);
  }

  return result >= 2;
};
