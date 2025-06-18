/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];

    // stack에 값이 있고 현재의 값이 stack의 최상단 값보다 큰 경우 ( 구하려는 값 )
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  const answer = [];

  for (let i = 0; i < nums1.length; i++) {
    answer.push(map.get(nums1[i]) ?? -1);
  }

  return answer;
};
