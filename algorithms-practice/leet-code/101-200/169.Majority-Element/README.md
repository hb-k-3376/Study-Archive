## 문제 설명

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

## 제한사항

1 <= n <= 231 - 1

## 문제 풀이

happy 넘버란? number의 각 자리수를 제곱으로 더한 값이 1이 될때 까지 반복해서 1이 되면 해피 넘버라고 한다.
예를 들어 19 > 1^2 + 9^2 = 82 , 82 => 8^2 + 2^2 = 68 이렇게 반복하다면 19는 1이 되므로 해피 넘어이다.
이 문제눈 투포인터로 풀수 있다. 만약 해피넘버가 아니라면 무한 루프에 빠지게 되고 어느 순간 두 포인터는 같은 값을 만들게 되기에
같은 값이 되면 이 숫자는 해피 넘버가 아니라고 생각하면 된다.
