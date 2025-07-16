# LeetCode 859. Buddy Strings

## 문제 설명

두 문자열 s와 goal이 주어집니다. s에서 두 글자를 교환하여 goal과 같은 결과를 만들 수 있으면 true를, 그렇지 않으면 false를 반환하세요.

글자 교환은 서로 다른 두 인덱스 i와 j (0-indexed)를 선택하여 s[i]와 s[j]의 문자를 바꾸는 것으로 정의됩니다.

예를 들어, "abcd"에서 인덱스 0과 2를 교환하면 "cbad"가 됩니다.

### 예제

**Example 1:**

- Input: s = "ab", goal = "ba"
- Output: true
- 설명: s[0] = 'a'와 s[1] = 'b'를 교환하여 "ba"를 만들 수 있습니다. 이는 goal과 같습니다.

**Example 2:**

- Input: s = "ab", goal = "ab"
- Output: false
- 설명: 두 글자를 교환해야 하는데, 교환할 경우 "ba"가 되어 goal과 다릅니다.

**Example 3:**

- Input: s = "aa", goal = "aa"
- Output: true
- 설명: 두 'a'를 교환해도 여전히 "aa"입니다.

## 제한사항

- 1 <= s.length, goal.length <= 2 \* 10^4
- s와 goal은 소문자로만 구성됩니다

## 문제 풀이

해시 테이블 문제가로 했지만 그냥 배열로 풀었다.
두 문자열이 동일한지 우선 체크 후 다르면 false를 같다면 로직을 시작한다.
같은 인덱스로 두 배열의 문자를 뽑아내서 비교하고 다르다면 카운트를 업한다.
카운트가 0일대는 pos1 값을 저장하고 1이상이면 pos2에 값을 저장한다.
반복문을 전부 돌고 카운트가 2라면? 두 인덱스를 교차 비교해서 같으면 true를 아니면 false를 반환하고 2와 0이 아니라면? 무조건 false이고 0이라면 set으로 중복을 제거해서 1이 상이면 false를 1이면 true를 리턴한다.
