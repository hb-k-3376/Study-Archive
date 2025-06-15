/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map(); // 분포도 조사 map
  const answer = [];

  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    // map에 값이 존재하고 값이 0보다 큰지 확인
    // 0 보다 큰지 확인하는 이유는? 이미 상쇄된 값일 수 있기 때문에
    if (map.has(num) && map.get(num) > 0) {
      answer.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return answer;
};
