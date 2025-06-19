# LeetCode 507. Perfect Number

## 문제 설명

완전수인지 판별하는 문제입니다.

완전수는 자기 자신을 제외한 양의 약수들의 합이 자기 자신과 같은 양의 정수입니다.

정수 num이 주어졌을 때, num이 완전수이면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.

### 예제

**Example 1:**

- Input: num = 28
- Output: true
- 설명: 28 = 1 + 2 + 4 + 7 + 14
- 1, 2, 4, 7, 14는 28의 모든 양의 약수들입니다.

**Example 2:**

- Input: num = 7
- Output: false

## 제한사항

- 1 <= num <= 10^8

## 문제 풀이

약수를 구한 후 에 모든 약수를 합한후 num을 뺀 값이 num과 같은지 체크하면 된다.
