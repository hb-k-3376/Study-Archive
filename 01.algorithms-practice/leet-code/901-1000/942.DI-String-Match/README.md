## 문제 설명

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

## 제한사항

1 <= s.length <= 105
s[i] is either 'I' or 'D'.

## 예시

### Example 1:

Input: s = "IDID"
Output: [0,4,1,3,2]

### Example 2:

Input: s = "III"
Output: [0,1,2,3]

### Example 3:

Input: s = "DDI"
Output: [3,2,0,1]

## 문제 풀이

0부터 n까지 숫자를 가지고 순열을 만드는 것인데 문자열 s에서 I가 나오면 지금 자릿수보다 다음 자릿수가 더 크고 D가 나오면 더 작은
커맨드로 순열을 구하는 방법이다 첫번쨰 문자열이 D라면 다음 숫자는 남아있는 숫자 중 가장 작은 숫자가 나오고 I라면 가장 큰 숫자가 나와야지한다.
조건을 쉽게 풀어서 이해 하자면
s[i] == 'I' if perm[i] < perm[i + 1] = perm[i]가 가장 작아야 다음 숫자가 어떤 숫자가 오든 이 조건을 만족할 수 있고
s[i] == 'D' if perm[i] > perm[i + 1] = perm[i]가 가장 커야 다음 숫자가 어떤 숫자가 오든 이 조건도 만족 시킬 수 있기 때문이다.
