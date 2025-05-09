## 문제 설명

Given two binary strings a and b, return their sum as a binary string.

## 제한사항

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

## 문제 풀이

제한 사항을 보면 10의 4승 의 값을 다루기 떄문에 toString으로 십진수로 표현하여 연산 후 다시 이진수로 변환하는 식의 풀이는 정확하지 않다
자바스크립트는 IEEE 754 표준에 의한 64비트 부동소수점으로 표현되기 떄문에 16자릿수를 넘어가는 수를 연산할 때에는 각각의 자릿수를 이용해서 푸는 것이 정확하다.

## 시간 복잡도

a 와 b 중 더 긴 쪽에 따라 달라지기 떄문에
O(max(a.length, b.length));
