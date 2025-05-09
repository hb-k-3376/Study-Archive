## 문제 설명

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

## 제한사항

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

## 문제 풀이

먼저 괄호를 열린 괄호와 닫힌 괄호를 매칭하여 확인하기 위해 stack 자료구조를 적용했으며
적절한 괄호를 매칭하기 위해 해시 테이블 맵을 사용하여 문제를 풀이하였다.
처음에는 open과 close 값을 해시 테이블에서 keys 와 values 로 뽑아오서 조건을 걸었지만
if(map[] === undefined)라는 조건으로 좀더 깔끔하게 코드를 만들어보았다.
