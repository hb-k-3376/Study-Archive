## 문제 설명

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

### Example 1:

Input: nums = [3,2,3]
Output: 3

### Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

## 제한사항

n == nums.length
1 <= n <= 5 \* 104
-109 <= nums[i] <= 109

## 문제 풀이

하나의 요소가 과반수를 넘는다는 조건이 있다면 상쇄라는 개념을 사용해서 문제를 풀 수 있다.
과반수가 될 수 도 있는 후보자를 우선 처음에 선언 한 후
후보자를 카운트 하면 되는데 같은 수가 나오면 +1을 다른 수가 나오면 -1을 카운팅하는데
만약에 count가 0 이하면 후보자를 변경해주면 된다,
