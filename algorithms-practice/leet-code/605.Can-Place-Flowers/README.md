## 문제 설명

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

## 제한사항

1 <= flowerbed.length <= 2 \* 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length

## 문제 풀이

식물을 심는데 인접한 (adjacent) 구역에는 식물을 심을 수 없다 0과 1로 이루어진 배열 flowerbed가 주어지고
n 심어야하는 식물의 수가 주어질때 심어야할 식물이 전부 심을 수 있다면 true 아니면 false를 주면 된다.

식물을 심을 수 있는 조건을 다음과 같다

1. 지금 현재 위치가 0 일떄,
2. 내 앞과 뒤가 0일때
   이 두가지의 조건을 체크해서 식물을 심고 배열을 최신화 시키면 된다.
