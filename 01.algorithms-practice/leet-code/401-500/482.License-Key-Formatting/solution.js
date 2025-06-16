/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  // 우선 -을 제거 한 후 에 대문자로 변경
  s = s.replaceAll('-', '').toUpperCase();
  // s.length를 k로 나누어 나머지가 발생하면
  // 첫번째 그룹은 나머지 만큼 그룹핑
  const remain = s.length % k;
  let answer = '';

  if (remain) {
    answer += s.slice(0, remain) + '-';
  }
  // 그 후 나머지값을 시작으로 반복문을 돌림
  for (let i = remain; i < s.length; i += k) {
    // k의 배수 만큼 자르고 answer에 추가하며 뒤에 - 추가
    answer += s.slice(i, i + k) + '-';
  }
  // 가장 마지막에 붙은 - 을 제거하며 return
  return answer.slice(0, answer.length - 1);
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var usingArray = function (s, k) {
  s = s.replaceAll('-', '').toUpperCase();
  const groups = []; // k수 만큼 추가할 배열

  // 배열의 뒤에서 부터 인덱스를 줄여감 k 씩
  for (let i = s.length; i > 0; i -= k) {
    // 배열의 앞에 값을 추가
    // slice(i-k, i)로 k씩 앞으로 인덱스를 뺴면서 슬라이스를 하고
    // 가장 앞은 나머지 값만큼 넣어줘야함으로 음수를 Math.max()로 0을 설정
    groups.unshift(s.slice(Math.max(0, i - k), i));
  }
  // 배열을 -으로 조인하여 return
  return groups.join('-');
};
