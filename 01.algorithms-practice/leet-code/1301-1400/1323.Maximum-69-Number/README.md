## 문제 설명

You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

### Example 1:

Input: num = 9669
Output: 9969
Explanation:
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.

### Example 2:

Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.

### Example 3:

Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.

## 제한사항

1 <= num <= 104
num consists of only 6 and 9 digits.

## 문제 풀이

6과 9로 이루어진 숫자가 있고, 그 숫자의 자릿수 하나를 변경할 수 있는 기회가 최대 한 번 주어질때,
주어진 숫자를 제일 큰 수로 변경하는 것은 가장 앞에 있는 자릿수의 6을 9로 변경하는 것 이다.
숫자를 문자열로 변경한 후 로직 처리하는 방법이 가장 쉽다.
