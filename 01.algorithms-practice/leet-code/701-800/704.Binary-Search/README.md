# LeetCode 704. Binary Search

## 문제 설명

정렬된 배열에서 이진 탐색을 구현하는 문제입니다.

오름차순으로 정렬된 정수 배열 nums와 정수 target이 주어졌을 때, nums에서 target을 찾아 그 인덱스를 반환해야 합니다. target이 존재하지 않으면 -1을 반환합니다.

O(log n) 런타임 복잡도를 가지는 알고리즘을 작성해야 합니다.

### 예제

**Example 1:**

- Input: nums = [-1,0,3,5,9,12], target = 9
- Output: 4
- 설명: 9가 nums에 존재하고 인덱스는 4입니다.

**Example 2:**

- Input: nums = [-1,0,3,5,9,12], target = 2
- Output: -1
- 설명: 2가 nums에 존재하지 않으므로 -1을 반환합니다.

## 제한사항

- 1 <= nums.length <= 10^4
- -10^4 < nums[i], target < 10^4
- nums의 모든 정수는 고유함
- nums는 오름차순으로 정렬됨

## 문제 풀이

문제에서 바이너리 서치를 사용하라고 했기 때문에 바이너리 서치를 사용하면 된다

1. 주요 포인트는 left <= right를 해줘야 한다. 모든 배열의 경우의 수를 체크해야 함으로
2. left = min +1 , right = min -1 을 해주는 이유는 위에서 value === targe을 해주기 때문
