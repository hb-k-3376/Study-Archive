# LeetCode 844. Backspace String Compare

## 문제 설명

두 문자열 s와 t가 주어집니다. 두 문자열이 빈 텍스트 에디터에 타이핑되었을 때 같으면 true를, 다르면 false를 반환하세요.

'#'는 백스페이스 문자를 의미합니다. 빈 텍스트에서 백스페이스를 하면 텍스트는 계속 비어있게 됩니다.

### 예제

**Example 1:**

- Input: s = "ab#c", t = "ad#c"
- Output: true
- 설명: s와 t 모두 "ac"가 됩니다.

**Example 2:**

- Input: s = "ab##", t = "c#d#"
- Output: true
- 설명: s와 t 모두 ""가 됩니다.

**Example 3:**

- Input: s = "a##c", t = "#a#c"
- Output: true
- 설명: s와 t 모두 "c"가 됩니다.

**Example 4:**

- Input: s = "a#c", t = "b"
- Output: false
- 설명: s는 "c"가 되고 t는 "b"가 됩니다.

## 제한사항

- 1 <= s.length, t.length <= 200
- s와 t는 소문자와 '#' 문자만 포함합니다

## 문제 풀이

간단하게 스택을 이용해서 문제를 풀었다. 각각 s,t를 저장할 stack을 만들고 각각 반복문을 돌려서 stack에 저장하는데 #를 만나면 이번 stack에 pop()으로 가장 늦게 들어온 값을 뺴주고 마지막에 배열을 합쳐서 비교했다
