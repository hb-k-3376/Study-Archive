# LeetCode 342. Power of Four

## 문제 설명

주어진 정수 n이 4의 거듭제곱인지 판단하는 문제입니다.

정수 n이 4의 거듭제곱이라는 것은 n == 4^x를 만족하는 정수 x가 존재한다는 의미입니다.

### 예제

**Example 1:**

- Input: n = 16
- Output: true
- 설명: 16 = 4²

**Example 2:**

- Input: n = 5
- Output: false

**Example 3:**

- Input: n = 1
- Output: true
- 설명: 1 = 4⁰

## 제한사항

- -2³¹ <= n <= 2³¹ - 1

## 문제 풀이

앞선 문제와 마찬가지고 4로 반복해서 나누며 나누는 기준은 n > 1 일때까지 4로 나눈다.
그리고 나누는 중에 n % 4 === 0이 아닌 조건이 있다면 바로 false
