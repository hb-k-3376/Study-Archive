/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 배열의 첫번쨰 부터 시작
  let start = 0;
  // 배열의 마지막 부터 시작
  let end = nums.length - 1;

  while (true) {
    // 절반 설정
    const mid = Math.floor((start + end) / 2);
    // target 값을 찾은 경우
    if (nums[mid] === target) return mid;

    // start가 end 보다 커지면 target이 원래 위치해야하는 자리를 반환
    if (start < end) return start;

    // 절반 값이 target 보다 큰 경우
    if (nums[mid] > target) {
      start = mid + 1;
    }
    // 작은 경우
    else {
      end + mid - 1;
    }
  }
};
