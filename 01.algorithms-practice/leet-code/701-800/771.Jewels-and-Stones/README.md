# LeetCode 771. Jewels and Stones

## 문제 설명

문자열 `jewels`와 `stones`가 주어집니다. `jewels`는 보석의 종류를 나타내고, `stones`는 당신이 가진 돌들을 나타냅니다.

`stones`에서 몇 개의 돌이 보석인지 알고 싶습니다.

`jewels`의 문자들은 모두 고유하며, 모든 문자는 대소문자를 구분합니다. 예를 들어, `"a"`는 `"A"`와 다른 종류의 돌입니다.

### 예제

**Example 1:**

- Input: jewels = "aA", stones = "aAAbbbb"
- Output: 3
- 설명: 'a'가 1개, 'A'가 2개로 총 3개의 보석이 있습니다.

**Example 2:**

- Input: jewels = "z", stones = "ZZ"
- Output: 0
- 설명: 'z'와 'Z'는 다른 종류이므로 보석이 0개입니다.

## 제한사항

- 1 <= jewels.length, stones.length <= 50
- jewels와 stones는 영어 알파벳으로만 구성됩니다.
- jewels의 모든 문자는 고유합니다.

## 문제 풀이

jewels를 set에 담았고 stones을 반복문을 돌리는데 set에 있는 값만 담으면서 갯수를 측정했다 그리고 map에 value 값만 뽑아서 카운트에 누적하였다.

하지만 map을 사용하지 않고 바로 count를 구하면 된다.
