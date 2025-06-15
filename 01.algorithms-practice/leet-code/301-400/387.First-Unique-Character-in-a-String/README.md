# LeetCode 387. First Unique Character in a String

## 문제 설명

문자열에서 첫 번째로 나타나는 유일한 문자의 인덱스를 찾는 문제입니다.

문자열 s가 주어졌을 때, 문자열에서 반복되지 않는 첫 번째 문자의 인덱스를 반환해야 합니다. 만약 그런 문자가 존재하지 않으면 -1을 반환합니다.

### 예제

**Example 1:**

- Input: s = "leetcode"
- Output: 0

**Example 2:**

- Input: s = "loveleetcode"
- Output: 2

**Example 3:**

- Input: s = "aabb"
- Output: -1

## 제한사항

- 1 <= s.length <= 10^5
- s는 영어 소문자로만 구성됨

## 문제 풀이

우선 Map으로 분포도를 설정한 후 다시 배열을 순회 하면서 가장 먼저
map.get(요소) === 1인 인덱스를 반환하고 1이 없다면 -1을 반환한다.
