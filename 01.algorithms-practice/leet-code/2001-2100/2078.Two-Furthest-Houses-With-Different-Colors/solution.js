/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  // 첫번째 인덱스 고정
  let gap1 = 0;
  for (let i = colors.length - 1; i >= 0; i--) {
    // 첫번째 인덱스를 고정 하고 마지막 인덱스 부터 -1 해가며 색이 다른 집을 찾자
    if (colors[0] !== colors[i]) {
      gap1 = i; // 첫번째 인덱스 고정이기 때문에 결과는 i - 0;
      break;
    }
  }

  // 마지막 인덱스 고정
  let gap2 = 0;
  for (let i = 0; i < colors.length - 1; i++) {
    // 마지막 인덱스를 고정하고 인덱스 0 부터 + 1 해가며 섹이 다른 집 찾기
    if (colors[colors.length - 1] !== colors[i]) {
      gap2 = colors.length - 1 - i; // 마지막 인덱스 고정이기 때문에 length - 1 - i
      break;
    }
  }

  return Math.max(gap1, gap2);
};
