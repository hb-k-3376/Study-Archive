/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (expected) => {
      if (expected === val) return true;
      throw Error('Not Equal');
    },
    notToBe: (expected) => {
      if (expected !== val) return true;
      throw Error('Equal');
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
