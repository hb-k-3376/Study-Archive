/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // strs 이 빈배열이면 '';
  if (strs.length === 0) return '';
  // strs가 하나 뿐이면 해당 값이 공통 접두사
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === '') return '';
    }
  }

  return prefix;
};

/**
 * 제일 첫번쨰 단어를 프리픽스로 설정한 다음 반복문을 이용해서 매칭한다.
 * 두번쨰 단어에 프리픽스가 있다면 다음 단어를 검색하고 없다면 프리픽싀의 값을 하나씩 줄여가벼 확인한다
 * 만약 프리픽스를 뒤의 문자를 줄여가며 매칭하다가 프리픽스가 ''이 된다면 그대로 '' 리턴
 *
 */
