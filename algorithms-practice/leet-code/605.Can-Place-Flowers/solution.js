/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0; // 카운트 선언

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 && // 1. 지금 내 위치가 0이고,
      (i === 0 || flowerbed[i + 1] === 0) && // 지금 위치기 맨 앞이 거나  다음  i+1이 0 이고,
      (i === flowerbed.length - 1 || flowerbed[i - 1] === 0)
    ) {
      // 지금 위치가 맨 뒤이 거나 이전ㅇ i-1이 0 이면
      flowerbed[i] = 1; /// 지금 위치에 식물 심기
      count++; // 카운트

      if (count >= n) return true; // 이미 n 개의 식물을 전부 다 심은 경우.
    }
  }

  return count >= n;
};
