# 문제 설명: Valid Parentheses

## 문제 설명

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## 제한사항

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

## 문제 이해

연결 리스트를 이용해서 정렬된 연결 리스트 두개를 순서대로 오른차순으로 합쳐서 return해야한다.
연결 리스트는 주석에서 준 내용으로 val은 현재 해드의 값이고 next는 다음연결된 노드를 가리킨다.
이 내용을 가지고 두개의 연결리스트의 현재 헤더 값을 가지고 비교해 더미 노드리스트에 저장하면 된다.

## 문제 풀이

문제 풀이느 solution.js 주석으로
