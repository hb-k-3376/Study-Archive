# LeetCode 884. Uncommon Words from Two Sentences

## 문제 설명

문장은 공백으로 구분된 단어들의 문자열이며, 각 단어는 소문자로만 구성됩니다.

단어가 "uncommon"한 조건은 두 문장 중 한 문장에서만 정확히 한 번 나타나고, 다른 문장에는 나타나지 않는 경우입니다.

두 문장 s1과 s2가 주어졌을 때, 모든 uncommon 단어들의 리스트를 반환하세요. 답은 어떤 순서로 반환해도 됩니다.

### 예제

**Example 1:**

- Input: s1 = "this apple is sweet", s2 = "this apple is sour"
- Output: ["sweet","sour"]
- 설명: "sweet"은 s1에만 나타나고, "sour"는 s2에만 나타납니다.

**Example 2:**

- Input: s1 = "apple apple", s2 = "banana"
- Output: ["banana"]
- 설명: "apple"은 s1에서 두 번 나타나므로 uncommon하지 않습니다. "banana"는 s2에서 한 번만 나타나므로 uncommon합니다.

## 제한사항

- 0 <= s1.length, s2.length <= 200
- s1과 s2는 공백과 소문자로만 구성됩니다
- s1과 s2는 선행 또는 후행 공백을 포함하지 않습니다
- s1과 s2의 모든 단어는 공백 하나로 구분됩니다

## 문제 풀이

하나에 map에 s1,과 s2 분포도를 조사 후 value가 1인 key만 배열에 담아 리턴한다.
