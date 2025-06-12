## 문제 설명

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

### Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
Since 2 has only one digit, return it.

### Example 2:

Input: num = 0
Output: 0

**Follow up**: Could you do it without any loop/recursion in O(1) runtime?

## 제한사항

0 <= num <= 2^31 - 1

## 문제 풀이

reduce를 사용하면 쉽게 풀 수 있다.
우선 num을 split을 이용해서 배열을 만든 후 reduce를 이용해서 합을 구하는 방식으로 반복문을 사용해서 사용할 수 있다.
하지만 문제에서는
**Follow up**: Could you do it without any loop/recursion in O(1) runtime?
두가지의 형태로 문제를 풀어보자

모듈러 연산을 사용하면 된다고 한다 num % 9를 하면 해당 값을 도출할 수 있게 되는데,
모듈러 연산(Modular Arithmetic) 설명:
a ≡ b (mod n)은 "a와 b를 n으로 나눈 나머지가 같다"는 뜻이다.

10 , 100, 1000의 숫자들은 모두 9로 나누면 1이된다.
예를 들어 123의 값을 구한다고 할때
1*100 + 2*10 + 3으로 만들수 있는데 각각의 자릿수를 9로 나누면 1*1 + 2*1 + 3\* 1이 된다.
1+2+3 = 6 으로 값 6이다.
여기서 만약 num % 9 = 0 이라면 이는 모든 수의 합이 9라는 뜻으로 예외 사항을 처리하면 된다.
