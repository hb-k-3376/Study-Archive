## 문제 설명

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

## 제한사항

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.

## 문제 풀이

제한 사항을 보면 digits의 length는 100 자릿수 까지 표현된다고한다.
자바스크립트는 IEEE 754 표준을 따르는 64비트 부동소숫점으로 표현이 가능하기 떄문에,
너무 '큰 수' 약 16 자릿수 까지는 표현이 가능하지만 그 이상의 수는 정확하게 표현 되지 않으므로
integer 연산으로 처리하는 것이 아니라 각 자릿수로 각각 처리하면 정확하게 처리할 수 있다.
