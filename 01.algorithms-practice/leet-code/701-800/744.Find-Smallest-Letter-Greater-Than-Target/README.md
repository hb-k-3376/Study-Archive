# LeetCode 744. Find Smallest Letter Greater Than Target

## 문제 설명

소문자로 이루어진 정렬된 문자 배열 `letters`와 목표 문자 `target`이 주어집니다. 배열에서 `target`보다 큰 가장 작은 문자를 찾아야 합니다.

문자들은 원형으로 배열되어 있다고 가정합니다. 즉, 배열의 마지막 문자 다음에는 첫 번째 문자가 옵니다. 예를 들어, `target = 'z'`이고 `letters = ['a', 'b']`라면, 답은 `'a'`입니다.

### 예제

**Example 1:**

- Input: letters = ["c","f","j"], target = "a"
- Output: "c"
- 설명: 배열에서 'a'보다 큰 가장 작은 문자는 'c'입니다.

**Example 2:**

- Input: letters = ["c","f","j"], target = "c"
- Output: "f"
- 설명: 배열에서 'c'보다 큰 가장 작은 문자는 'f'입니다.

**Example 3:**

- Input: letters = ["x","x","y","y"], target = "z"
- Output: "x"
- 설명: 문자들이 원형으로 배열되어 있으므로, 'z'보다 큰 문자가 없어서 배열의 첫 번째 문자인 'x'를 반환합니다.

## 제한사항

- 2 <= letters.length <= 10^4
- letters[i]는 소문자입니다.
- letters는 비내림차순으로 정렬되어 있습니다.
- letters는 최소 2개의 서로 다른 문자를 포함합니다.
- target은 소문자입니다.

## 문제 풀이

이진 탐색으로 경계 점을 찾으면 될거같고 경계점이 없다면 return letters[0]을 하면 된다.
(midChar <= target)을 한 이 유는 경계 값을 찾아야 함으로 같은 값을 찾아도 그 보다 큰 숫자를 탐색하기 위해
