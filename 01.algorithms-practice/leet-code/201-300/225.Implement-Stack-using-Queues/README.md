# LeetCode 225. Implement Stack using Queues

## 문제 설명

큐(Queue)를 사용하여 스택(Stack)을 구현하는 문제입니다.

큐의 표준 연산만을 사용하여 후입선출(LIFO) 스택을 구현해야 합니다. 즉, push to back, peek/pop from front, size, is empty 연산만 사용할 수 있습니다.

구현해야 할 메서드:

- push(x): 요소 x를 스택 맨 위에 추가
- pop(): 스택 맨 위의 요소를 제거하고 반환
- top(): 스택 맨 위의 요소를 반환
- empty(): 스택이 비어있으면 true, 아니면 false 반환

### 예제

**Example 1:**

Input: ["MyStack", "push", "push", "top", "pop", "empty"] [[], [1], [2], [], [], []]
Output: [null, null, null, 2, 2, false]

설명:
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False

## 제한사항

- 1 <= x <= 9
- 최대 100번의 push, pop, top, empty 호출
- pop과 top 호출 시 스택이 비어있지 않음을 보장

## 문제 풀이

queue의 특징을 가지고 stack을 구현하는 문제이다
queue의 특징

- push to back : 맨 뒤에 요소 추가 (배열 push)
- peek/pop from front : 먄 앞 요소 출력 or 제거 (배열 shift)
- size, is empty : queue의 사이즈 (배열 length)
  위 특징 3가지로만 구현하면 된다.

첫 번쨰 push는 맨뒤에 새 요소를 푸쉬 하는 방법으로
배열의 push를 사용하면 된다.

두 번째 pop은 맨 뒤에 요소를 반환하며 제거하는 메서드이다.
우선 큐1번의 요소들중 맨 뒤의 요소를 제외하고 나머지 요소들을 큐2로 옮겨놓고
큐1번은 맨 마지막 요소만이 남아있기 때문에 shift로 제거 하면 반환 하고
다시 큐2번의 요소를 큐1번에 옮겨담으면 된다.

세 번째 top도 pop과 비슷하지만 제거하지 않고 출력만 한 다음 다시 큐의 맨뒤로 옮긴 후
다시 큐 1번에 옮기면 된다.

네 번째 is empty는 length가 0인지 아닌지만 확인하면 된다.
