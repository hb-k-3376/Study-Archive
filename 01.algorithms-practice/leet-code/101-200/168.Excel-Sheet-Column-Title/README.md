## 문제 설명

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...

### Example 1:

Input: columnNumber = 1
Output: "A"

### Example 2:

Input: columnNumber = 28
Output: "AB"

### Example 3:

Input: columnNumber = 701
Output: "ZY"

## 제한사항

1 <= columnNumber <= 231 - 1

## 문제 풀이

26진수는 0 - 25이지만 숫자 처리는 1 - 26으로 해여한다.
주어진 columnNumber를 26으로 계속 나누며 나머지와 몫을 가지고 값을 출력하면 된다.
