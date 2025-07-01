/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = {}; // 빈도수 체크

  for (const num of nums) {
    map[num] = (map[num] ?? 0) + 1;
  }

  const maxDegree = Math.max(...Object.values(map));
  const degrees = [];
  for (const [key, value] of Object.entries(map)) {
    if (value === maxDegree) {
      degrees.push(+key);
    }
  }

  let min = Infinity;
  for (let i = 0; i < degrees.length; i++) {
    const degree = degrees[i];

    const firstIndex = nums.indexOf(degree);
    const lastIndex = nums.lastIndexOf(degree);

    min = Math.min(min, lastIndex - firstIndex + 1);
  }
  return min;
};

var 최적화 = function (nums) {
  const count = new Map();
  const firstIndex = new Map();
  const lastIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // 빈도수 탐색
    count.set(num, (count.get(num) ?? 0) + 1);

    // 가장 앞에 있는 값 : 인덱스
    if (!firstIndex.has(num)) {
      firstIndex.set(num, i);
    }
    // 계속 갱신해서 가장 뒤에있는 값 :인덱스
    lastIndex.set(num, i);
  }

  // count 에서 가장 큰 값 추출
  const maxDegree = Math.max(...count.values());
  let min = Infinity; // 최소값

  for (const [num, freq] of count) {
    if (maxDegree === freq) {
      const leng = lastIndex.get(num) - firstIndex.get(num) + 1;
      min = Math.min(min, leng);
    }
  }

  return min;
};
