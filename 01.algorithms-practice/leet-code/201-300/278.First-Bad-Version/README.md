# LeetCode 278. First Bad VersionAdd commentMore actions

## 문제 설명

버전 관리 시스템에서 첫 번째 잘못된 버전을 찾는 문제입니다.

당신은 제품 관리자이고 팀을 이끌고 새로운 제품을 개발하고 있습니다. 불행히도 최신 버전이 품질 검사를 통과하지 못했습니다. n개의 버전 [1, 2, ..., n]이 있고, 어떤 잘못된 버전으로 인해 그 이후의 모든 버전들이 잘못되었다는 것을 알아냈습니다.

첫 번째 잘못된 버전을 찾아야 하는데, 이는 그 이후의 모든 버전들이 잘못되게 만든 원인이 됩니다.

`bool isBadVersion(version)` API가 제공되어 버전이 잘못되었는지 확인할 수 있습니다. 첫 번째 잘못된 버전을 찾는 함수를 구현하세요. API 호출 횟수를 최소화해야 합니다.

### 예제

**Example 1:**

- Input: n = 5, bad = 4
- Output: 4
- 설명:
- isBadVersion(3) → false
- isBadVersion(5) → true
- isBadVersion(4) → true
- 따라서 4가 첫 번째 잘못된 버전입니다.

**Example 2:**

- Input: n = 1, bad = 1
- Output: 1

## 제한사항

- 1 <= bad <= n <= 2^31 - 1

## 문제 풀이

이진 검색을 사용하면 쉽게 사용할 수 있다.
left 값을 1로 right 값을 n으로 선언 후 중간 값을 갱신하며
가장 첫번째 bad 버전을 탐색하면 되는데, left === right이 될깨 까지 반복문을 돌리면 된다.
중간 값이 bad 값이라면? 첫 번째 bad 값은 mid 값 이하에 존재하고 good이라면? mid 값 이후에 존재하게 된다.
그래서 left === right 값이 같아 지는 순간 이 첫 번째 bad가 된다.
