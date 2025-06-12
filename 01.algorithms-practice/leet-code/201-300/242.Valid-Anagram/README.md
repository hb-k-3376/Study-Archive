## 문제 설명

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

### Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

### Example 2:

Input: s = "rat", t = "car"

Output: false

## 제한사항

1 <= s.length, t.length <= 5 \* 10^4
s and t consist of lowercase English letters.

## 문제 풀이

아나그램은 서로 다른 두 단어를 재조합하면 같은 단어가 되는 것들 말한다.
간단하게 생각하면 하나의 문자열을 map으로 분포도를 조사한 후 다른 문자열을 분포도를 조사할때 미리 만들어놓은 map
에 대입하여 상쇄 시켜준다.
그 이후에 values만 뽑아서 배열을 만들고 해당 값을 중 0이 아닌 숫자가 포함된다면 false를 반환 한다.
