/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  // 소문자 아스키 코드 로 변경 a = 0, z = 25
  const arr = Array.from({ length: s.length }, (_, i) => {
    const index = s[i].charCodeAt() - 97;
    return widths[index];
  });

  const maxRowWidth = 100;
  let currentWidth = 0;
  let lowCount = 1;
  for (const width of arr) {
    if (currentWidth + width > maxRowWidth) {
      lowCount++;
      currentWidth = width;
      continue;
    }
    currentWidth += width;
  }

  return [lowCount, currentWidth];
};
