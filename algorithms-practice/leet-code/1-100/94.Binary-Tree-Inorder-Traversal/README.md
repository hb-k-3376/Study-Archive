## 문제 설명

Given the root of a binary tree, return the inorder traversal of its nodes' values.

## 제한사항

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

## 문제 풀이

dfs 깊이 우선 탐색 유형의 문제이다 그 중 inorder traversal 중위 순회 탐색으로 값을 stack에 저장하면 된다.
중위 순회는 왼쪽 - root - 오늘쪽 순으로 탐색하는 방식이다.
