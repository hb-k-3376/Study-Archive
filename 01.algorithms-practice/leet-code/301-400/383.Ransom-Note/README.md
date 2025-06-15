# LeetCode 383. Ransom Note

## 문제 설명

잡지의 글자들을 사용해서 몸값 요구서를 작성할 수 있는지 판단하는 문제입니다.

두 문자열 ransomNote와 magazine이 주어졌을 때, magazine의 글자들을 사용해서 ransomNote를 구성할 수 있으면 true를, 아니면 false를 반환해야 합니다. magazine의 각 글자는 ransomNote에서 최대 한 번만 사용할 수 있습니다.

### 예제

**Example 1:**

- Input: ransomNote = "a", magazine = "b"
- Output: false

**Example 2:**

- Input: ransomNote = "aa", magazine = "ab"
- Output: false

**Example 3:**

- Input: ransomNote = "aa", magazine = "aab"
- Output: true

## 제한사항

- 1 <= ransomNote.length, magazine.length <= 10^5
- ransomNote와 magazine은 영어 소문자로만 구성됨

## 문제 풀이

이 문제도 map을 이용한 분포도 조사해서 상쇄 개념을 사용하면 쉽게 문제를 풀 수 있을 것 같다.
