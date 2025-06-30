/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const arr = [];

  for (let i = 0; i < operations.length; i++) {
    const el = operations[i];
    const arrLeng = arr.length;
    // 정수 인 경우
    if (Number.isInteger(+el)) {
      arr.push(+el); // 바로 배열에 담기
    }
    // 정수가 아닌 경우
    else {
      if (el === '+') {
        arr.push(arr[arrLeng - 1] + arr[arrLeng - 2]);
      } else if (el === 'D') {
        arr.push(arr[arrLeng - 1] * 2);
      } else {
        arr.pop();
      }
    }
  }
  return arr.reduce((sum, num) => sum + num, 0);
};
