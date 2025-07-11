# LeetCode 819. Most Common Word

## 문제 설명

문단 `paragraph`와 금지된 단어들의 배열 `banned`가 주어집니다. 금지되지 않은 단어 중에서 가장 많이 나타나는 단어를 반환해야 합니다. 답은 소문자로 반환해야 합니다.

문단에서 단어들은 공백과 구두점으로 구분됩니다. 구두점에는 `!?',;.`가 포함됩니다. 대소문자는 구분하지 않습니다.

적어도 하나의 단어가 금지되지 않았다는 것이 보장됩니다.

### 예제

**Example 1:**

- Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
- Output: "ball"
- 설명: "hit"은 금지된 단어이므로 제외합니다. "ball"이 2번 나타나서 가장 빈도가 높습니다.

**Example 2:**

- Input: paragraph = "a.", banned = []
- Output: "a"
- 설명: 금지된 단어가 없고 "a"만 있으므로 "a"를 반환합니다.

## 제한사항

- 1 <= paragraph.length <= 1000
- paragraph는 영어 문자, 공백 ' ', 또는 구두점 문자 !?',;. 중 하나로 구성됩니다.
- 0 <= banned.length <= 100
- 1 <= banned[i].length <= 10
- banned[i]는 소문자로만 구성됩니다.

## 문제 풀이

대소문자가 섞여있고 정확한 비교를 위해 모든 값을 소문자로 변경한다.
그리고 banned된 단어들을 빠르게 탐색하기 위해 set에 담고 정규식을 이용해서 문자들만 남기고 배열로 만든다. map을 생성해서 단어들만을 남긴 배열의 분포도를 조사하는데 banned 단어는 map에 담지 않는다. 마지막으로 map을 배열로 변경하고 가장 value가 큰 key 값을 반환한다.
