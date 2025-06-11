## 문제 설명

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

### Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

### Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

## 제한사항

0 <= nums.length <= 20
-2^31 <= nums[i] <= 2^31 - 1
All the values of nums are unique.
nums is sorted in ascending order.

## 문제 풀이

시작 포인터를 하나 설정하고
반복문을 돌려서 인덱스와 인덱스 -1를 비교해서 -1차이라면? 연속된 숫자 취급
-1보다 크게 차이가 난다면? 동떨어진숫자로 판단하여 이전 start 포인터 -> 인덱스 -1 을 저장하고,
동떨어진숫자로 시작하면? start 포인터를 이동 시키고 다시 인덱스 비교를한다.

이렇게 되면 마지막 배열 요소 처리를 해여하는데
start === nums.length-1: 마지막 원소 하나만 남음 → 단일 숫자
start < nums.length-1: 여러 개 남음 → 범위

반복문에서 마지막 그룹은 비교할 다음 원소가 없어서 처리되지 않기 때문에 별도로 처리해여한다.
