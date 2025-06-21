/**
 * @param {string} word
 * @return {boolean}
 */
// 내장 함수 사용
var detectCapitalUse = function (word) {
  return (
    word.toLowerCase() === word ||
    word.toUpperCase() === word ||
    word[0].toUpperCase() + word.slice(1).toLowerCase() === word
  );
};
// 대문자 갯수 세기
var detectCapitalUse = function (word) {
  let capitalCount = 0;

  for (const c of word) {
    if (c.toUpperCase() === c) {
      capitalCount++;
    }
  }

  return (
    capitalCount === word.length || capitalCount === 0 || (capitalCount === 1 && word[0] === word[0].toUpperCase())
  );
};

// 정규식
var detectCapitalUse = function (word) {
  return /^[A-Z]+$ |^[a-z]+& |^[A-Z][a-z]+$/g.test(word);
};
