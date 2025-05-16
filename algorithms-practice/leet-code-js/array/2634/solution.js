/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const returnedArr = [];

  for (let i = 0; i < arr.length; i++) {
    const isTrue = fn(arr[i], i);
    if (isTrue) {
      returnedArr.push(arr[i]);
    }
  }

  return returnedArr;
};
