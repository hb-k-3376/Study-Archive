/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (!num) return '0'; // 0일 경우 바로 "0" return
  let isNegative = num < 0; // 음수인지 양수 인지 판단

  num = Math.abs(num); // 절대값으로 변환
  let seven = '';
  while (num > 0) {
    seven = (num % 7) + seven;
    num = Math.floor(num / 7);
  }

  return isNegative ? '-' + seven : seven;
};

var recursive = function (num) {
  if (num < 0) return '-' + recursive(-num); // 음수면 음수로 시작할 수 있게 처리
  if (num < 7) return String(num); // num이 7미만으로 더이상 몫이 발생하지않으면 리턴(기저 조건)
  return recursive(Math.floor(num / 7)) + (num % 7); // 나머지를 뒤에 붙이고 몫을 다시 재귀로 처리
};
