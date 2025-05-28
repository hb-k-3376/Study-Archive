## 문제 설명

You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.

### Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

### Example 2:

Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".

### Example 3:

Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.

## 제한사항

1 <= num.length <= 105
num only consists of digits and does not contain any leading zeros.

## 문제 풀이

큰 수가 주어지는데 이 수의 가장 큰 홀수를 찾는 알고리즘이다.
만약 홀수가 존재하지 않는다면 빈값을 return 하면 되고 문자열중 가장 큰 홀수를 찾으면 되는데, 이 문제는 정말 간단하다.
홀수의 정의는 2로 나눴을때 딱 나누어 떨어지지않고 1이 남으면 해당 수는 홀수라고 할 수 있다.
좀 더 쉽게 접근한다면, 1의 자릿수가 홀수면? 앞에 어떤 수가 와도 해당 수는 홀수이다.
그렇기 때문에 맨위 부터 홀수값을 찾아 인덱스 0부터 찾은 홀수값 인덱스 까지 문자열 자르기를 하면 된다.
