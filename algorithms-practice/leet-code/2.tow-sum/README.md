## 문제 설명

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## 제한사항

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

## 문제 풀이

이 문제는 상당히 간단하다 해시 테이블과 보수 사용하면 정말 간단하게 풀 수 있다. (객체를 사용해도 간단하게 풀 수 있다.)
보수는 주어진 값에 어떠한 값( 보수 )를 더하면 특정 값을 만들 수 있는 개념이다.
nums 배열을 반복문으로 탐색하여 map에 [배열의 요소, 인덱스 ] 형식으로 저장하고 보수를 구해서 map에 현재 el의 보수가 있나 확인
있다면 그 값을 리턴하면 된다.
