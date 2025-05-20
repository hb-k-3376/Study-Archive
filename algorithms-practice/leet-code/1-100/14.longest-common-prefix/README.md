## 문제 설명

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

## 제한사항

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.

## 문제 풀이

첫 strs의 el를 프리픽스로 먼저 지정하고 다음 인덱스의 el부터 프리픽스의 뒷 문자를 지워가면서 검증을 하면 된다.
strs 배열과 el와 프리픽스를 매칭해가며 뒷 값을 지워나가면 된다.
