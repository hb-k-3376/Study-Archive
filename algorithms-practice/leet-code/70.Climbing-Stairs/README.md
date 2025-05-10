## 문제 설명

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps
   Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

## 제한사항

1 <= n <= 45

## 문제 풀이

이 문제는 다이나믹 프로그래밍 문제이다. 이번에 처음 접해본 유형의 문제인데 아직 완벽하게 이해하지는 못했다...
우선 계단이 1 일떄 2 일때를 실제로 구하여 어떠한 규칙이 있다는 것을 알아냈다 1과 2는 그대로 1과 2가 정답이지만
3번쨰 부터는 n-1 + n-2 = n 이라는 점화식을 만들 수 있었고 이러한 점화식은 다이나믹 프로그래밍 문제의 유형이라는 것을 알게 되었다.

## 시간 복잡도
