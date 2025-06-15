/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // 중간값이 완전 제곱근인 경우 true
    if (mid ** 2 === num) return true;
    // 중간값의 제곱근이 target보다 큰경우
    if (mid ** 2 > num) {
      right = mid - 1;
    }
    // 중간값의 제곱근이 target보다 작은 경우
    else if (mid ** 2 < num) {
      left = mid + 1;
    }
  }

  return false;
};
