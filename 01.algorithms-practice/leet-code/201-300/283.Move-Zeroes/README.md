## 문제 설명

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

### Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

### Example 2:

Input: nums = [0]
Output: [0]

## 제한사항

1 <= nums.length <= 10^4
-2^31 <= nums[i] <= 2^31 - 1

## 문제 풀이

배열을 새로만들지 말고 기존 배열에서 값을 옮기면서 0을 배열의 뒤로 옮기는 문제인데
이 문제는 인덱스를 이용한 풀이가 있고 투 포인터를 이용한 풀이가 있다.
두 방법다 풀어보겠다.

1. 인덱스를 이용한 방법
   인덱스를 이용한 방법은 순차적으로 배열을 순환하면서 0인 값들을 앞으로 복사해 모아주면 된다.

2. 투포인터를 이용하는 방법
   우선 인덱스를 이용하는 방법보다 효율적이다 인덱스는 반복문을 두번 돌려야하지만 투포인터는 한번만 순환하면 된다.
