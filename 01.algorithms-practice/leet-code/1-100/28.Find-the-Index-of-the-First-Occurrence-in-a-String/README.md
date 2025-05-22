## 문제 설명

GGiven an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

## 제한사항

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100

## 문제 풀이

이 문제도 투 포인트로 풀수 있었다 여기서 중요한 키워드는 in-place로 새로운 배열을 할당하지 않고 푸는 문제이다
먼저 느린 포인트와 빠른 포인트를 지정한 후, val과 같지 않은 요소를 빠른 포인터로 찾을때 느린포인터를 ++해주면된다,
