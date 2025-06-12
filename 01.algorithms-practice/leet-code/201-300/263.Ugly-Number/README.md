## 문제 설명

An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.

Given an integer n, return true if n is an ugly number.

### Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3

### Example 2:

Input: n = 1
Output: true
Explanation: 1 has no prime factors.

### Example 3:

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.

## 제한사항

-2^31 <= n <= 2^31 - 1

## 문제 풀이

2나누도 3으로 나누고 5나누다가 1이 남으면 true 그 외 값이 나오면 false를 반환하면 되는데
음수와 0은 2,3,5를 인수로 갖을 수 없기 때문에 먼저 조건으로 걸러준다.
