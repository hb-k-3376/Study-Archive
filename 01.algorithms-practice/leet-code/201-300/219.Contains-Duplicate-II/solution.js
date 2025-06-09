/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map(); // 맵 생성

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // map에 num 값이 있고 && 현재 인덱스 i - 기존 인덱스 가 K 이하 일때 true 반환
    if (map.has(num) && i - map.get(num) <= k) {
      return true;
    }
  }

  return false;
};
