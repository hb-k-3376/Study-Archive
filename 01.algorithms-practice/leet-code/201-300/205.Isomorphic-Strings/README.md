## 문제 설명

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

### Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

### Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

### Example 3:

Input: s = "paper", t = "title"

Output: true

## 제한사항

1 <= s.length <= 5 \* 104
t.length == s.length
s and t consist of any valid ascii character.

## 문제 풀이

문제는 두 문자열이 동형성(isomorphic)을 갖는지 판단하는 문제이다.

1. 일관성 유지: 특정 문자의 모든 출현은 동일한 문자로 치환되어야 함
   - 예: `s`에서 'a'가 여러 번 나오면, 모든 'a'는 같은 문자로 치환되어야 함
2. 순서 보존: 문자들의 순서는 그대로 유지되어야 함
3. 일대일 대응: 서로 다른 두 문자가 같은 문자로 대응되면 안됨
   - 예: 'a' → 'x', 'b' → 'x' 이런 식으로는 안됨
4. 자기 자신으로의 대응 허용: 문자가 자기 자신으로 대응되는 것은 가능
   - 예: 'a' → 'a'

- `s = "egg"`, `t = "add"` → 동형성 O (e→a, g→d)
- `s = "foo"`, `t = "bar"` → 동형성 X (o가 a와 r 둘 다에 대응될 수 없음)
