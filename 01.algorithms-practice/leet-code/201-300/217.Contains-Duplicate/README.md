## 문제 설명

GGiven an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

### Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

### Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

### Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

## 제한사항

1 <= nums.length <= 10^5
-109 <= nums[i] <= 10^9

## 문제 풀이

이 문제는 정말 간단하게 풀 수 있는 문제이다.
nums를 set으로 변경하고 size와 nums.length를 비교하면 된다.
set은 중복을 허용하지 않기 떄문에.
