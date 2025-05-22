## 문제 설명

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

## 제한사항

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.

## 문제 풀이

무작위 대문자 소문자 영어 char가 나열된 문자열을 조합해서 가장 긴 palindrome을 만드는 문제이다.
나는 간단하게 문자 출현 빈도를 map에 담아 구한 뒤 빈도수로 카운트하는 로직으로 문제를 풀었다
자세한 풀이는 solution에서..
