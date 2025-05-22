/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills[0] !== 5) return false; // 처음에 나온 지페가 5달러가 아니라면 바로 false

  let five = 0; // 5달러
  let ten = 0; // 10 달러

  for (const bill of bills) {
    // 5달러를 지불할 경우
    if (bill === 5) {
      five++;
    }
    // 10달러를 지불할 경우
    else if (bill === 10) {
      if (five === 0) return false; // 5달러가 없으면 false
      five--;
      ten++;
    }
    // 20 달러 지페를 지불할 경우
    else if (bill === 20) {
      // 우선순위
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      }
      // 5달러가 3장이상 있는 경우
      else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
