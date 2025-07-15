/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sStack = [];
  const tStack = [];

  for (const c of s) {
    if (c !== '#') {
      sStack.push(c);
    } else {
      sStack.pop();
    }
  }

  for (const c of t) {
    if (c !== '#') {
      tStack.push(c);
    } else {
      tStack.pop();
    }
  }

  return sStack.join('') === tStack.join('');
};
