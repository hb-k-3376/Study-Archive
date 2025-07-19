# LeetCode 896. Monotonic Array

## 문제 설명

배열이 단조증가 또는 단조감소하면 단조 배열(monotonic)입니다.

배열 nums가 단조증가라는 것은 모든 i <= j에 대해 nums[i] <= nums[j]인 경우입니다.
배열 nums가 단조감소라는 것은 모든 i <= j에 대해 nums[i] >= nums[j]인 경우입니다.

정수 배열 nums가 주어졌을 때, 주어진 배열이 단조 배열이면 true를, 그렇지 않으면 false를 반환하세요.

### 예제

**Example 1:**

- Input: nums = [1,2,2,3]
- Output: true

**Example 2:**

- Input: nums = [6,5,4,4]
- Output: true

**Example 3:**

- Input: nums = [1,3,2]
- Output: false

## 제한사항

- 1 <= nums.length <= 10^5
- -10^5 <= nums[i] <= 10^5

## 문제 풀이

간단하게 인덱스 0, 1을 비교해서 증가인지 감소인지 판단하기에는 연속된 배열의 요소가 같은 값을 수 도 있다. 하여 단순 증감으로 판단하지말거 같은경우는 연산 하지 않고 넘어가는 식으로 만들고 front와 rare 값에 차이가 발생할 때 에 증 감을 판단한다. 판단이 정해진 이후에는
증감 배열에 따라 조선을 걸어 false true를 반환한다.
