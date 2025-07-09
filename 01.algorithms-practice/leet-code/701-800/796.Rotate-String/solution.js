/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  const rotateString = s.repeat(2);

  return rotateString.indexOf(goal) >= 0;
};
