## 문제 설명

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

## 제한사항

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

## 문제 풀이

패턴을 보면 기본적으로 큰수가 앞에있고 작은수가 뒤에 있지만 연산이 필요한 상황에서는 작은 수가 앞에 있고 그다음 큰수가 존재한다.
CM 은 100(C) - 1000(M) 값이라는걸 알 수 있다 그렇기 때문에 현재 갚과 다음 값을 비교 후 현재값이 더 크다면 더하기를 작다면 빼기를 하면 된다.
