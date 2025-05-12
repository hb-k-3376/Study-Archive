## 문제 설명

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

## 제한사항

1 <= s.length <= 2 \* 105
s consists only of printable ASCII characters.

## 문제 풀이

투포인터로 풀 수 있고 reverse 로 풀수도있다.
우선 주어진 s를 공백과 특수문자를 전부 제거 해줘야하는데 이부분은 정규식을 사용하면 편하게 제거할 수 있다.
풀이는 solution에서...
