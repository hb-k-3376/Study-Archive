## 문제 설명

You are playing the following Nim Game with your friend:

Initially, there is a heap of stones on the table.
You and your friend will alternate taking turns, and you go first.
On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
The one who removes the last stone is the winner.
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

### Example 1:

Input: n = 4
Output: false
Explanation: These are the possible outcomes:

1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
   In all outcomes, your friend wins.

### Example 2:

Input: n = 1
Output: true

### Example 3:

Input: n = 2
Output: true

## 제한사항

1 <= n <= 2^31 - 1

## 문제 풀이

마지막의 n의 돌을 가져가는 사람이 이기는 게임이다.
마지막 돌을 내가 항상 잡으려면 어떻게 되어야할까?
상대방 턴에 남아있는 돌이 4개가 남아있으면 내가 무조건 이긴다.

이유가 뭘까?
남아있는 돌 4개
상대방 3개 -> 나 1개 -> 나의 승
상대방 2개 -> 나 2개 -> 나의 승
상대방 1개 -> 나 3개 -> 나의 승

그렇다면 ? 나는 항상 내가 끝내는 턴에 4의 배수를 만들어 놓으면 항상 이길 수 있다.
그렇다면 내가 항상 4의 배수로 만들수 없는 경우는 어떤 경우가 있을까?
애초에 주어진 n의 수가 n의 배수이면 항상 최선의 플레이를 진행했을때 나는 내가 끝나는 턴에 4의 배수를 만들수 없게 된다.
