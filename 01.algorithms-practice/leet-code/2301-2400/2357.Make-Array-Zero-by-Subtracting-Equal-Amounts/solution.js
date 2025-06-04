/**
 * @param {number[]} nums
 * @return {number}
 */
// set을 사용한 방법
var minimumOperations = function (nums) {
  // filter 로 0을 제거
  const filterZero = nums.filter((num) => num !== 0);

  // 중복을 허용하지 않는 set으로 중복을 제거
  const filterDupl = new Set(filterZero);
  // set의 사이즈를 반환
  return filterDupl.size;
};

// 반복문을 사용한 방법
var loopOperations = function (nums) {
  // 오름차순으로 정렬
  nums.sort((a, b) => a - b);

  let count = 0;
  let prev = 0;
  // 반복문
  for (const num of nums) {
    // num이 0 이상이고 이전 값이랑 다르면 (중복값은 무시)
    if (num > 0 && prev !== num) {
      count++;
      prev = num; // 여기에 위한 이유는 연산을 했을 경우에만 prev 값을 업데이트 시켜준다 사실 밖에 있어도 상관은 없다.
    }
  }

  return count;
};
