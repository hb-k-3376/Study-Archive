## 문제 설명

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

### Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

### Example 2:

Input: nums = [0,1]

Output: 2

Explanation:

n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

### Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]

Output: 8

Explanation:

n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

## 제한사항

n == nums.length
1 <= n <= 10^4
0 <= nums[i] <= n
All the numbers of nums are unique.

## 문제 풀이

가장 직관적인 방법은 연속된 배열을 정열하고 반복문을 돌려서 연속된 숫자인지 아닌지 확인하는 방법이 있겠고
두 번째는 가우스의 공식을 이용해서 0 - n까지의 합( n \* ( n -1 ) /2 )과 실제 배열의 합을 구한 후 빼 주면 쉽게 구할 수 있다.
