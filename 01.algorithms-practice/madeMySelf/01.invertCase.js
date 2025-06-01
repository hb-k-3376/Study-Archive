/**
 * 대문자, 소문자 알파벳,  공백으로만  이루어진 문자열 str 이 주어졌을때, 소문자는 대문자로 , 대문자는 소문자로 변경하려 값을 반환하는 함수를 만들어주세요.
 */
const invertCase = (str) => {
  return Array.from(str)
    .map((c) => (c === ' ' ? ' ' : c.toUpperCase === c ? c.toLowerCase() : c.toUpperCase()))
    .join('');
};
