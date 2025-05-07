/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 빠른 포인터
  let i = 0;
  // 느린 포인터
  for (let j = 0; j < nums.length; j++) {
    // 느린 포인터를 기준으로 빠른 포인터가 중복이 아닌 값들을 탐색한다.
    // 느린 포인터는 중복인 값에 위치하고 있다가 빠른 포인터가 중복이 아닌 값을 찾아내면
    if (nums[i] !== nums[j]) {
      i++;
      // i++ 다음 값에 중복이 아닌 값을 위치 시키고 느린 포인터의 값을 재 위치 시킨다
      nums[i] = nums[j];
    }
  }
  // 포인터의 시작값이 0 이기 때문에 +1을 하여 카운터 수를 맞춘다.
  return i + 1;
};
