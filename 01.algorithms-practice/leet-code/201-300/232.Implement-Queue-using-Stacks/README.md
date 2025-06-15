# LeetCode 232. Implement Queue using Stacks

## 문제 설명

스택(Stack)을 사용하여 큐(Queue)를 구현하는 문제입니다.

스택의 표준 연산만을 사용하여 선입선출(FIFO) 큐를 구현해야 합니다. 즉, push to top, peek/pop from top, size, is empty 연산만 사용할 수 있습니다.

구현해야 할 메서드:

- push(x): 요소 x를 큐의 뒤쪽에 추가
- pop(): 큐의 앞쪽에서 요소를 제거하고 반환
- peek(): 큐의 앞쪽 요소를 반환
- empty(): 큐가 비어있으면 true, 아니면 false 반환

### 예제

**Example 1:**

Input: ["MyQueue", "push", "push", "peek", "pop", "empty"] [[], [1], [2], [], [], []]
Output: [null, null, null, 1, 1, false]

설명:
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

## 제한사항

- 1 <= x <= 9
- 최대 100번의 push, pop, peek, empty 호출
- pop과 peek 호출 시 큐가 비어있지 않음을 보장

## 문제 풀이

이문제는 stack을 가지고 큐를 구현하는 문제이다.
stack의 특징

- push to top ( 배열 Push )
- peek/pop from top
- size ( length)
- is empty

첫 번째 push를 그냥 배열의 push를 사용한다.
두 번째 pop은 stack1을 stack2로 거꾸로 옮긴후 맨 마지막 요소를 pop();한뒤
다시 stack2를 stack1로 옮기면 된다.
세 번째 peek도 간단하게 stack2로 옮긴 후 마지막요소를 출력후 다시 stack1로
네 번째 length로 0을 체크하면 된다.
