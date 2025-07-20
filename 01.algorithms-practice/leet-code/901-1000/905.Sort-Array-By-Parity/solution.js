/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let evenPointer = 0;
  let oddPointer = nums.length - 1;

  const answer = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];

    if (target % 2 === 0) {
      answer[evenPointer] = target;
      evenPointer++;
    } else {
      answer[oddPointer] = target;
      oddPointer--;
    }
  }
  return answer;
};
