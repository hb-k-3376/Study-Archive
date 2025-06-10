## 문제 설명

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

### Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1

### Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16

### Example 3:

Input: n = 3
Output: false

## 제한사항

-2^31 <= n <= 2^31 - 1

## 문제 풀이

2의 거듭 제곱인지 확인 문제인데 간단하게 2로 계속 나누어서 해당 값을 구하면 된다
여기서 예외 사항이 있는데 음수로 포함되기 때문에 n <= 0d일 경우 false를 반환하는 로직을 추가하면 된다.
