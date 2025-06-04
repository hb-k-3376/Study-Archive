/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  // 매 순간을 판단하는 로직

  let seconds = 0;

  // 마지막으로 남을 컵까지 전부 채워지면 반복문 종료
  while (amount[0] > 0 || amount[1] > 0 || amount[2] > 0) {
    //매 순간 가장 많은 컵과 두번쨰 컵을 찾아야함으로 내림 차순 정렬
    amount.sort((a, b) => b - a);

    if (amount[1] === 0) {
      // 하나의 컵만 남게 된다면
      seconds += amount[0];
    }

    // 첫번째 두번째 컵 카운트 다운
    amount[0]--;
    amount[1]--;
    // 시간 카운트 업
    seconds++;
  }

  return seconds;
};

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCupsMathWay = function (amount) {
  // 가장 많은 컵의 수가 나머지 컵의 수보다 크면 Math.max(...amount)를 바로 return
  // 그렇지 않다면 모든 합을 /2로 나눈 후 반올림하면 된다.

  return Math.max(Math.max(...amount), Math.ceil(amount.reduce((sum, num) => sum + num, 0) / 2));
};
