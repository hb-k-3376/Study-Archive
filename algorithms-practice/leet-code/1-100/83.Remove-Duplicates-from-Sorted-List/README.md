## 문제 설명

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

## 제한사항

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.

## 문제 풀이

이문제는 Link list 자료 구조를 이해하고 있는지에 대한 문제이다.
중복을 제거하기 위해서는 지금 현재 노드와 다음 노드를 비교해서 같은 노드라면 다음 노드를 건너 뛰고 다음 -> 다음 노드를 다음 노드로 덮어 씌우고
중복이 아니라면 다음 노드로 넘어가는 식으로 비교를 진행하면 된다.
