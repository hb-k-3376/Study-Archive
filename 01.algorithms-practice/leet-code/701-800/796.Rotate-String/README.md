# LeetCode 796. Rotate String

## 문제 설명

두 문자열 `s`와 `goal`이 주어집니다. `s`에 여러 번의 **shift** 연산을 수행한 후 `goal`이 될 수 있다면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

**shift** 연산은 `s`의 가장 왼쪽 문자를 가장 오른쪽 위치로 이동시키는 것입니다.

예를 들어, `s = "abcde"`라면, 한 번의 shift 후에 `"bcdea"`가 됩니다.

### 예제

**Example 1:**

- Input: s = "abcde", goal = "cdeab"
- Output: true
- 설명: "abcde"를 두 번 shift하면 "cdeab"가 됩니다.

**Example 2:**

- Input: s = "abcde", goal = "abced"
- Output: false
- 설명: shift 연산으로는 "abcde"를 "abced"로 만들 수 없습니다.

## 제한사항

- 1 <= s.length, goal.length <= 100
- s와 goal은 소문자로만 구성됩니다.

## 문제 풀이

shift는 왼쪽에있는 문자를 오른쪽으로 이동하는 것이라고 한다면 애초에 repeat(2)로 문자열 두개를 붙인다음 goal이 중간에 포함되는지 확인하면 된다. 우선적으로 s.length 와 goal.length를 비교해서 다르면 애초에 조건이 성립이 되지 않기떄문에 초기 조건으로 걸러준다.
