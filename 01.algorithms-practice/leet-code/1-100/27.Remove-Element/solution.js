/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 느린 포인터
  let i = 0;

  // 빠른 포인터로 배열 탐색
  for (let j = 0; j < nums.length; j++) {
    // 빠른 포인터로 탐색한 값들이 val ( target )과 동일 하지 않다면
    // 느린 포인터로 위치 시키고 느린포인터를 ++ 해준다.
    // 동일하나면 해당 값은 제자리에 위치 나중에 덮어 씌여지거나 느린 포인터에 영향이 없다.
    if (nums[j] !== val) {
      nums[i] = nums[j];

      i++;
    }
  }

  return i;
};
