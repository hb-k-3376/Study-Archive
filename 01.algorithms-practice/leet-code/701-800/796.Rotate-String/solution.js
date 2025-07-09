/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  const rotateString = s.repeat(2);

  return rotateString.indexOf(goal) === -1 ? false : true;
};
