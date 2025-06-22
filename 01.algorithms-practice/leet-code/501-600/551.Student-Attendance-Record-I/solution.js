/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let aCount = 0;
  let lCount = 0;
  for (const c of s) {
    if (c === 'A') {
      aCount++;
      lCount = 0; // l 카운트를 초기화한다.
    } else if (c === 'L') {
      lCount++;
    } else {
      lCount = 0; // l 카운트를 초기화한다.
    }

    if (aCount > 2 || lCount > 3) {
      return false;
    }
  }

  return true;
};

// 정규식 사용법
var checkRecord = function (s) {
  return !/LLL/.test(s) && s.split('A').length <= 2;
};
