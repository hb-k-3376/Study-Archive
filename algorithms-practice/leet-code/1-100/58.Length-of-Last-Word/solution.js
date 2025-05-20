/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.trim().replaceAll(/\s+/g, ' ').split(' ');
  return arr.at(-1).length;
};
