## 문제 설명

You are given a string s consisting of n characters which are either 'X' or 'O'.

A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.

Return the minimum number of moves required so that all the characters of s are converted to 'O'.

### Example 1:

Input: s = "XXX"
Output: 1
Explanation: XXX -> OOO
We select all the 3 characters and convert them in one move.

### Example 2:

Input: s = "XXOX"
Output: 2
Explanation: XXOX -> OOOX -> OOOO
We select the first 3 characters in the first move, and convert them to 'O'.
Then we select the last 3 characters and convert them so that the final string contains all 'O's.

### Example 3:

Input: s = "OOOO"
Output: 0
Explanation: There are no 'X's in s to convert.

## 제한사항

3 <= s.length <= 1000
s[i] is either 'X' or 'O'.

## 문제 분석

X를 3칸씩 옮겨 다니며 O로 변경하는 알고리즘이다
한번에 3칸씩 옮겨 다닐대 최소한의 이동을 구하는데 생각보다 쉽다.
X를 만나면 +3칸을 이동하고 O를 만나면 한칸씩 이동하며 3칸씩이동한 횟수를 구하면 된다.
