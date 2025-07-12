# LeetCode 821. Shortest Distance to a Character

## 문제 설명

문자열 `s`와 문자 `c`가 주어집니다. `s`의 각 인덱스 `i`에 대해, `i`에서 문자 `c`까지의 최단 거리를 구해야 합니다.

두 인덱스 `i`와 `j` 사이의 거리는 `|i - j|`입니다.

### 예제

**Example 1:**

- Input: s = "loveleetcode", c = "e"
- Output: [3,2,1,0,1,0,0,1,2,3,4,5]
- 설명: 문자 'e'는 인덱스 3, 5, 6에 나타납니다. 각 문자에서 가장 가까운 'e'까지의 거리를 계산합니다.

**Example 2:**

- Input: s = "aaab", c = "b"
- Output: [3,2,1,0]
- 설명: 문자 'b'는 인덱스 3에만 나타납니다.

## 제한사항

- 1 <= s.length <= 10^4
- s[i]와 c는 소문자입니다.
- 문자 c가 s에 적어도 한 번은 나타남이 보장됩니다.

## 문제 풀이

우선 s에 포함되어있는 c들의 인덱스를 배열(targetIndex)에 저장한다.
그 배열을 가지고 s를 반복하며 targetIndex 배열 값들을 연산하여 가장 작은 값을 구해 answer 배열에 저장한다.
