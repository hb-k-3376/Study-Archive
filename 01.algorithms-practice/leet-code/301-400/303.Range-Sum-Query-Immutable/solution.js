/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // 누적 합산 배열
  this.acc = nums.reduce((arr, num, index) => {
    if (index === 0) {
      arr.push(num);
    } else {
      arr.push(num + arr[index - 1]);
    }
    return arr;
  }, []);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) return this.acc[right];
  return this.acc[right] - this.acc[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
