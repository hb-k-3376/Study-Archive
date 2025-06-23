/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const strArr = s.split(' ');

  return strArr.map((item) => item.split('').reverse().join('')).join(' ');
};
