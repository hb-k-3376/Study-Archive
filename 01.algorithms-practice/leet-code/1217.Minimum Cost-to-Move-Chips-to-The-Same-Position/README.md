## 문제 설명

We have n chips, where the position of the ith chip is position[i].

We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

position[i] + 2 or position[i] - 2 with cost = 0.
position[i] + 1 or position[i] - 1 with cost = 1.
Return the minimum cost needed to move all the chips to the same position.

## 제한사항

1 <= position.length <= 100
1 <= position[i] <= 10^9

## 문제 풀이

칩들이 여러 위치에 있을고 두칸씩 이동할때는 코스트가 0, 한칸을 이동할때는 코스트가 1이 든다고 했을때,
가장 쉽게 알 수 있는 방법은 무엇일까?, 우선 짝수는 짝수끼리 칩을 한 곳에 모은다면 코스트는 0이 들것이고,
홀수도 마찬가지로 서로 한곳이 모일때는 코스트가 0이 될 것이다. 그렇다면 이제 짝수 홀수 두 그룹은 서로 인접한 곳에 0 코스트로 모일 수 있다.
그 후, 두 그룹중 적은 곳이 많은 곳으로 이동하는데 코스트를 소비하게 되면 가장 적은 코스트를 구할 수 있을 것이다.
