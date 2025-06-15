/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const map = new Map();

  for (const n of nums) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }

  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(i + 1)) answer.push(i + 1);
  }

  return answer;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbersOn = function (nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]); // 절대 값으로 값을 가져옴
    nums[num - 1] = -Math.abs(nums[num - 1]); // 해당 값에 매칭되는 값을 음수로 표시
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      answer.push(i + 1);
    }
  }

  return answer;
};
