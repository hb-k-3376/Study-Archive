/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 1) return false;
  let sum = 1; // 1은 모든 수의 약수

  // 2 부터 시작하여 자기 자신은 포함이 안됨
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) {
        sum += num / i;
      }
    }
  }

  return sum === num;
};
