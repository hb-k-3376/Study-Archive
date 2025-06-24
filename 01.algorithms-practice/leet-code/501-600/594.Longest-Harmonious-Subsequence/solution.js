/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const arr = Array.from(map).sort((a, b) => a[0] - b[0]);

  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    // 조화로운 값이라면?
    if (arr[i + 1][0] - arr[i][0] === 1) {
      max = Math.max(max, map.get(arr[i][0]) + map.get(arr[i + 1][0]));
    }
  }

  return max;
};
