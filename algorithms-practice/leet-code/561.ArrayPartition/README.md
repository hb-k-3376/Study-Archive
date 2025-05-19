## 문제 설명

Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

## 제한사항

1 <= n <= 104
nums.length == 2 \* n
-104 <= nums[i] <= 104

## 문제 풀이

이문제는 2n개의 정수로 이우어진 배열이 주어지고 각 쌍을 이룰때 각 쌍의 작은 값들을 전부 더 한 값이 가능 큰 경우의 합을 구하는 문제이다.
이 문제의 톨찰의 핵심은 가장 작은 값은 그 다음으로 작은값과 쌍을 이루어야 한다는 것이다,
이 배열의 가장 작은 값은 이 값보다 다음으로 작은 값과 쌍을 이루어야지만 이득? 이라는 이야기다 그러면 이 배열을 오름차순으로 정렬한수
가장 인접한 요소들 까리 쌍을 이루게 하고 그 중 작은 값을 구해 합해주면 된다.
