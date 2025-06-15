# LeetCode 392. Is Subsequence

## 문제 설명

문자열 s가 문자열 t의 부분 수열인지 판단하는 문제입니다.

두 문자열 s와 t가 주어졌을 때, s가 t의 부분 수열(subsequence)이면 true를, 아니면 false를 반환해야 합니다.

문자열의 부분 수열은 원래 문자열에서 일부 문자들을 삭제하되 나머지 문자들의 상대적 순서는 바꾸지 않고 형성할 수 있는 새로운 문자열입니다.

### 예제

**Example 1:**

- Input: s = "abc", t = "aehbgdc"
- Output: true

**Example 2:**

- Input: s = "axc", t = "ahbgdc"
- Output: false

## 제한사항

- 0 <= s.length <= 100
- 0 <= t.length <= 10^4
- s와 t는 영어 소문자로만 구성됨

## 문제 풀이

s 포인터와 t 포인터를 각각 두고 t 배열을 순회하면서 s와 t 같은 값이 나오면 s포인터를 카운트 업하면서 계속 순회한다. t의 배열을 끝까지 순회 할 때 까지 s 포인터의 값이 s의 배열의 길이 만큼 카운트 업이 되지 않았다면
부분 수열이 아니라는 뜻이므로 false를 반환한다.
