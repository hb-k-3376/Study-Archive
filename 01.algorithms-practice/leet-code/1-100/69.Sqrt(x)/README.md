## 문제 설명

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x \*\* 0.5 in python.

## 제한사항

0 <= x <= 231 - 1

## 문제 풀이

이 문제는 자바스크립트 내장 함수를 사용하지 않고 x의 제곱근을 구하는 문제이다.
이문제는 이진 탐색을 이용해서 값을 구 할 수 있다 1부터 n까지의 범위를 가지고 범위를 좁혀가며 값을 구하면 된다.

## 시간 복잡도

이진 탐색을 사용하기 떄문에 O(log n) 시간 복잡도를 가진다.
