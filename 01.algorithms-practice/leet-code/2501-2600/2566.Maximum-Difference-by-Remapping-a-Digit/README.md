## 문제 설명

You are given an integer num. You know that Bob will sneakily remap one of the 10 possible digits (0 to 9) to another digit.

Return the difference between the maximum and minimum values Bob can make by remapping exactly one digit in num.

Notes:

- When Bob remaps a digit d1 to another digit d2, Bob replaces all occurrences of d1 in num with d2.
- Bob can remap a digit to itself, in which case num does not change.
- Bob can remap different digits for obtaining minimum and maximum values respectively.
- The resulting number after remapping can contain leading zeroes.

### Example 1:

Input: num = 11891
Output: 99009
Explanation:
To achieve the maximum value, Bob can remap the digit 1 to the digit 9 to yield 99899.
To achieve the minimum value, Bob can remap the digit 1 to the digit 0, yielding 890.
The difference between these two numbers is 99009.

### Example 2:

Input: num = 90
Output: 99
Explanation:
The maximum value that can be returned by the function is 99 (if 0 is replaced by 9) and the minimum value that can be returned by the function is 0 (if 9 is replaced by 0).
Thus, we return 99.

## 제한사항

1 <= num <= 10^8

## 문제 풀이

0~9 사이에 값을 이용해서 주어진 num을 가장 큰 값으로, 그리고 가장 작은 값으로 변경하여 차이를 구하면 되는 문제이다.
만약 11891을 가장 큰 수로 변경 하려면 1을 전부 9로변 경하면 99899가 되며 1을 0으로 변경하면 00890으로 가장 작은 값이 된다.
숫자의 특성은 가장 앞에 자리가 크면 큰 숫자가 되고 앞자리가 작을 수록 가장 작아진다. 이특성을 이용해서 문제를 풀면 된다.
반복문을 돌며 9가 아닌 앞의 자리숫를 찾아 전부 9로 변경해주고 가장 큰 수를 만들 수 있고
0이 아닌 가장 앞에 있는 숫자를 찾아 전부 0으로 변경해주면 가장 작은 숫자를 만들 수 있다.
