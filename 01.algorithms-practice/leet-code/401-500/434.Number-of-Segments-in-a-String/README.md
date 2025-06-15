# LeetCode 434. Number of Segments in a String

## 문제 설명

문자열에서 세그먼트의 개수를 세는 문제입니다.

문자열 s가 주어졌을 때, 문자열의 세그먼트 개수를 반환해야 합니다.

세그먼트는 연속된 공백이 아닌 문자들의 시퀀스로 정의됩니다.

### 예제

**Example 1:**

- Input: s = "Hello, my name is John"
- Output: 5
- 설명: 다섯 개의 세그먼트는 ["Hello,", "my", "name", "is", "John"]입니다.

**Example 2:**

- Input: s = "Hello"
- Output: 1

**Example 3:**

- Input: s = ""
- Output: 0

## 제한사항

- 0 <= s.length <= 300
- s는 영어 소문자, 대문자, 숫자, 공백 (' ')으로만 구성됨
- s의 유일한 구분자는 공백 문자임

## 문제 풀이

문자열 s를 양쪽의 공백을 trim으로 제거한 후 replaceAll과 정규식으로 여러 공백을 하나의 공백으로 변경한다
그 후, 공백으로 split해서 배열을 만들어 준 다음 length를 구하면 된다.

만약 trim와 정규식으로 처리를 했을때 s가 공백 문자라면 조기 처리로 0을 반환해준다.
