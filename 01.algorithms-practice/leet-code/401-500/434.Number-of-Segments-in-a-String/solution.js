/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s.trim().replaceAll(/\s+/g, ' ');

  if (s === '') return 0;

  return s.split(' ').length;
};
