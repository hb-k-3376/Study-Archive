## 문제 설명

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

## 제한사항

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

## 문제 풀이

이 문제는 O(log n) 으로 풀어야한다고 한다 sorted array 정렬된 배열이 주어져있고 target 밸류를 찾아야 하기 떄문에 바이너리 서치 방법을 사용하면 된다.
바이너리 서치는 범위를 반씩 줄여가벼 target을 찾는 방법이다
