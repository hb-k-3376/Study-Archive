/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  const len = bits.length;

  // 초반 조건으로 가장 뒤에 있는 요소가 1이라면 바로 false를 리턴
  if (bits[len - 1] === 1) return false;

  for (let i = 0; i < len; ) {
    const bit = bits[i];

    // 현재 인덱스가 가장 마지막 인덱스가 된다면 true
    if (i === len - 1) {
      return true;
    }

    // 배열의 앞부터 순회하며 현재 자리가 1이면 2bits 문자로 판단 + 2 건너뜀
    if (bit === 1) {
      i += 2;
    }
    // 0이라면 한자리 숫자로 판단 +1 함
    else {
      i++;
    }
  }

  return false;
};
