/**
 * @param {number} area
 * @return {number[]}
 */
// basic
var constructRectangle = function (area) {
  const dividers = [];

  for (let i = 1; i <= Math.sqrt(area); i++) {
    if (area % i === 0) {
      dividers.push(i);

      dividers.push(area / i);
    }
  }
  return [dividers[dividers.length - 1], dividers[dividers.length - 2]];
};

// 최적화
var constructRectangle = function (area) {
  for (let i = Math.sqrt(area); i >= 1; i--) {
    if (area % i === 0) {
      return [area / i, i];
    }
  }
};
