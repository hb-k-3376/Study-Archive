/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;

  let count = 0;
  let pos1 = 0;
  let pos2 = 0;
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const gChar = goal[i];

    if (sChar !== gChar) {
      if (count === 0) {
        pos1 = i;
      } else {
        pos2 = i;
      }
      count++;
    }
  }
  if (count === 2) {
    if (s[pos1] === goal[pos2] && s[pos2] === goal[pos1]) return true;
    return false;
  }

  if (count === 0) {
    return (
      new Set([...s]).size < s.length || new Set([...goal]).size < goal.length
    );
  }

  return false;
};
