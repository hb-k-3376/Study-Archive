# LeetCode 459. Repeated Substring Pattern

## 문제 설명

문자열이 반복되는 부분 문자열로 구성되어 있는지 확인하는 문제입니다.

문자열 s가 주어졌을 때, s가 그 자체의 부분 문자열을 여러 번 연결하여 구성될 수 있는지 확인해야 합니다.

### 예제

**Example 1:**

- Input: s = "abab"
- Output: true
- 설명: "ab"를 두 번 반복하여 만들 수 있습니다.

**Example 2:**

- Input: s = "aba"
- Output: false

**Example 3:**

- Input: s = "abcabcabcabc"
- Output: true
- 설명: "abc"를 네 번 반복하여 만들 수 있습니다. 또는 "abcabc"를 두 번 반복해도 됩니다.

## 제한사항

- 1 <= s.length <= 10^4
- s는 영어 소문자로만 구성됨

## 문제 풀이

s 의 length에 대한 약수를 구해서 해당 약수만큼의 부분 문자열을 잘라 repeat해서 값을 비교하면 된다.
