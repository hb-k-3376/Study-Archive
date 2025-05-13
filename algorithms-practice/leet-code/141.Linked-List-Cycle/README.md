## 문제 설명

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

## 제한사항

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

## 문제 풀이

linked list는 현재 값과 다음 노드 정보를 갖고 있는 데이터로 이 문제에서는 원래는 마지막에 null이있어야 하지만
이전에 노드 정보를 갖고 있으면 순환한테고 생각하고 true를 반환하면 되고 null이라면 false를 반환하면 된다.
이 문제는 정말 간단하게 hash map , set 으로 풀 수 있다. 문제 해설에는 투 포인터로도 풀 수 있다고 하니 한번 두가지 방법으로 풀어 보겠다.
