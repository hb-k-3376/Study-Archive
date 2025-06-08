/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = '';

  while (columnNumber > 0) {
    columnNumber--; // 0-indexed로 변환
    result = String.fromCharCode((columnNumber % 26) + 65) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};
