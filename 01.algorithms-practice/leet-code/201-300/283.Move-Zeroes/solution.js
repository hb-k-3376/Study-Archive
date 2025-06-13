/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 인덱스를 이용한 방법
var moveZeroesWithIndex = function (nums) {
  let writeIndex = 0; // 0이 아닌 값을 옮기는 위치

  for (let i = 0; i < nums.length; i++) {
    // 만역 nums[i]가 0이 아니라면 맨 앞으로 자리를 옮긴다.
    if (nums[i] !== 0) {
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }

  // writeIndex의 위치부터 0을 맨 뒤 까지 채워주면 된다.
  for (let i = writeIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 인덱스를 이용한 방법
var moveZeroesWithTwoPointer = function (nums) {
  let left = 0; // 0의 위치

  // right 포인터는 배열을 순회 하면서 0이 아닌 값을 찾는다.
  // 0이 아닌 값을 찾으면 left의 값과 교환을한다.
  // 교환을 하면 left의 값을 +1 을 하여 다시 0을 찾는다.
  // 0이 여러개 여도 상관이 없는것이 right가 0인 값은 넘어가기 떄문에
  // left는 항상 0의 위치를 가리킨다.
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
  }

  return nums;
};
