/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  // 배열의 합을 구함
  const sum = arr.reduce((sum, num) => sum + num, 0);
  // 배열의 합이 3으로 나누어 떨어지지 않으면, false
  if (sum % 3 !== 0) return false;

  let count = 0; // 몇번쨰 파트 연산인지 체크
  let currentSum = 0; // 현재 파트의 합
  const target = sum / 3; // 각 파트의 합이 되어져야할 값

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]; // 파트의 합을 구한다.

    if (currentSum === target) {
      // 파트의 합이 target이 되면
      count++; // 다음 파트로 이동
      currentSum = 0; // 파트의 합 초기화

      // count 2를 체크하는 이유는 선행 조건에서 이미 3으로 나누어 떨어지기 떄문에
      // 2까지만 체크하고, 남아있는 요소가 하나 이상 있는지도 체크
      if (count === 2 && i < arr.length - 1) {
        return true;
      }
    }
  }
  return false;
};
