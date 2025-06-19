/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  const dividers = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      dividers.push(i);
      if (i !== num / i) {
        dividers.push(num / i);
      }
    }
  }

  return dividers.reduce((sum, num) => sum + num, 0) - num === num;
};
