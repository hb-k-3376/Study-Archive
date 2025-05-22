## 문제 설명

Given an integer x, return true if x is a palindrome, and false otherwise

## 제한사항

-231 <= x <= 231 - 1

## 문제 풀이

이 문제는 단순하게 x 값을 뒤에서부터 차례로 새로운 변수에 이어 붙여 쌓고 x의 자릿수의 반이 되면
그 값을 비교하면 된다. x의 자릿수가 홀수라면 뒤에서 부터 이어 붙인 새로운 변수의 마지막 자릿수를 제거하고 비교한다.
