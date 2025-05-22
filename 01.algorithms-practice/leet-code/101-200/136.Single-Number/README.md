## 문제 설명

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

## 제한사항

1 <= nums.length <= 3 _ 104
-3 _ 104 <= nums[i] <= 3 \* 104
Each element in the array appears twice except for one element which appears only once.

## 문제 풀이

set 자료구조를 만들어서 set에 요소를 저장하고 만약 요소가 있다면 set에서 삭제 하면 된다.
하지만 문제에서 원하는 ' use only constant extra space.'를 구현 하려고 한다면
XOR연산을 사용하면 된다.

XOR을 사용하면 1 ^ 1 = 0, 1 ^ 0 = 1 , 0 ^ 1 = 1, 0 ^ 0 = 0 의 속성일 이용하여 풀면 되는데
문제에서 every element appears twice except for one이라는 특수한 상황에서 사용하기 좋다
하나의 요소 뺴곤 던부 두개씩 나온다고 하였으니 1 ^ 1 = 0 , 0 ^ 0 = 0 이라는 속성을 이용하면 쉽게 구할 수 있다.
