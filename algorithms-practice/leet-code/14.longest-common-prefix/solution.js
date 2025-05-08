/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // strs가 빈 배열이면 return ''
  if (strs.length === 0) return '';

  // prefix를 먼저 지정한다
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];

    // prefix가 str의 접두사일 때까지 반복
    while (str.indexOf(prefix) !== 0) {
      // 뒤에서 부터 한글자씩 삭제
      prefix = prefix.substring(0, prefix.length - 1);
      // prefix가 빈 값이면 return ''
      if (prefix === '') return '';
    }
  }

  return prefix;
};
