/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  /**
   * String()으로 문자열로 변경한 후
   * replace() 함수로 6을 9로 변경하는데, replace()는 가장 첫번쨰 나오는 숫자만 변경하기 떄문에,
   * 그리고 +를 가장 앞에 둬서 다시 number로 변경한다.
   */
  return +String(num).replace('6', '9');
};
