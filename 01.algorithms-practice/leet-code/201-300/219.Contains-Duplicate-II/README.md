## 문제 설명

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

### Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

### Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

### Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

## 제한사항

1 <= nums.length <= 10^5
-109 <= nums[i] <= 10^9
0 <= k <= 10^5

## 문제 풀이

map을 사용하면 쉽게 풀이 할 수 있다.
map에 값을 key(num) : value(index)이런 식으로 값을 저장하면서 지금 인덱스와 map에 있는 인덱스의 거리를 계산하고
k 이하 일때 true를 반환하면 된다.
