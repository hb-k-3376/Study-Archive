## 문제 설명

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.

### Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".

### Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

### Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false

## 제한사항

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.

## 문제 풀이

pattern을 파악해서 s에 공백으로 나열된 문자와 매칭하여 패턴을 파악하는 문제이다.
pattern의 알파벳이 등장하는 순서대로 s의 단어가 같은 알파벳으면 같은 단어인지 확인해여한다.
예시를 보면 abba는 a 가 dog b가 cat으로 매핑하면 dog(a) cat(b) cat(b) dog(a) 이면,
true를 반환하면 된다.

1. s를 공백으로 나누어 배열(sArr)을 만든다.
2. 반복문을 돌면서 pattern과 sArr의 요소를 맵 객체에 저장한다
3. 저장할때 저장된 패턴이 없고 저장된 sArr가 없으면 저장
4. 패턴은 있는데 단어와 매칭이 안되면 false 를 반환한다.
5. 예외 사항으로 pattern.length !== sArr.length 면 바로 false를 반환해준다.
