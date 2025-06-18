# LeetCode 500. Keyboard Row

## 문제 설명

키보드의 같은 행에 있는 글자들로만 구성된 단어를 찾는 문제입니다.

문자열 배열 words가 주어졌을 때, 미국 키보드의 같은 행에 있는 글자들로만 타이핑할 수 있는 단어들을 반환해야 합니다.

미국 키보드에서:

- 첫 번째 행: "qwertyuiop"
- 두 번째 행: "asdfghjkl"
- 세 번째 행: "zxcvbnm"

### 예제

**Example 1:**

- Input: words = ["Hello","Alaska","Dad","Peace"]
- Output: ["Alaska","Dad"]

**Example 2:**

- Input: words = ["omk"]
- Output: []

**Example 3:**

- Input: words = ["adsdf","sfd"]
- Output: ["adsdf","sfd"]

## 제한사항

- 1 <= words.length <= 20
- 1 <= words[i].length <= 100
- words[i]는 영어 소문자로만 구성됨

## 문제 풀이

- 첫 번째 행: "qwertyuiop"
- 두 번째 행: "asdfghjkl"
- 세 번째 행: "zxcvbnm"
  들을 각각 set으로 만들어 바로 char가 어느 키 배열에 포함되는지 확인 할 수 있게 하였다.
  기본 적인 로직은 각 word에 첫번째 글자가 어느 키 배열에 포함되는지 확인 체크해서 키배열을 확보한뒤 확보한 키배열로 나머지 word를 체크해서 키배열에 모든 char가 존재하는지 않하는지 확인하였다.
