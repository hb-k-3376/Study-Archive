# LeetCode 374. Guess Number Higher or Lower

## 문제 설명

숫자 맞히기 게임 문제입니다.

나는 1부터 n 사이의 숫자를 선택합니다. 당신은 내가 선택한 숫자를 맞혀야 합니다.

당신이 틀린 숫자를 추측할 때마다, 나는 내가 선택한 숫자가 당신의 추측보다 높은지 낮은지 알려줍니다.

당신은 미리 정의된 API `int guess(int num)`을 호출할 수 있습니다. 이 API는 다음 3가지 결과 중 하나를 반환합니다:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).

내가 선택한 숫자를 반환하세요.

### 예제

**Example 1:**

- Input: n = 10, pick = 6
- Output: 6

**Example 2:**

- Input: n = 1, pick = 1
- Output: 1

**Example 3:**

- Input: n = 2, pick = 1
- Output: 1

## 제한사항

- 1 <= n <= 2^31 - 1
- 1 <= pick <= n

## 문제 풀이

이진 탐색으로 문제를 풀면 된다.
이진 탐색이란? 양쪽 끝을 포인터로 잡고 양끝의 중간 값을 구한다음 도출해여하는 값 보다 큰지 작은지를 판단하여
중간값이 더 크다면? 왼쪽에 답이 있기 땨문에 오른쪽 포인터를 중간값 -1 로 옮기며 중간값이 더 작다면? 오른쪽에 답이 있음으로 왼쪽 포인터를 중간값 +1로 옮기는 작업을 반복하다 보면 어느순간 값을 찾게 된다. 만약 답이 없다면? left값이 right 값보다 커지는 순간 반복문을 종료하고 값이 없다고 알림하면 된다. 값이 있다면 반복문이 도는 중에 무조건 결과를 반환하게 된다.

경계: right = mid (mid 포함)
값: right = mid - 1 (mid 제외)
