## 문제 설명

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

### Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

### Example 2:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

### Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

## 제한사항

2 <= s.length <= 1000
s[i] is either 'L' or 'R'.
s is a balanced string.

## 문제 풀이

R과 L로 이루어져있는 문자열 s을 발란스( R과 L의 갯수가 동일하게 ) 맞게 가장 많이 나눌 수 있는 조합의 갯수를 구라하는 말이다.
처음에는 stack으로 발란스있게 들어오면 카운트 하는 방식을 생각했지만, 더 간단한 방법이 있다.
R과 L의 갯수를 각각 순서대로 세고 갯수가 같이 질떄 마다 카운트 업을 하면 쉽게 구할 수 있다.
