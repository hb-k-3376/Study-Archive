# LeetCode 748. Shortest Completing Word

## 문제 설명

문자열 `licensePlate`와 문자열 배열 `words`가 주어집니다.

`licensePlate`에 포함된 모든 문자(숫자와 공백 제외)를 포함하는 가장 짧은 단어를 찾아야 합니다. 이러한 단어를 "completing word"라고 합니다.

- `licensePlate`에 문자가 여러 번 나타나면, completing word에도 그 문자가 같은 횟수만큼 또는 그 이상 포함되어야 합니다.
- 예를 들어, `licensePlate = "aBc 12c"`라면, completing word는 문자 'a', 'b', 'c'를 각각 1개씩, 그리고 'c'를 1개 더 포함해야 합니다.
- 가능한 completing word들 중에서 가장 짧은 것을 반환합니다. 길이가 같다면 배열에서 먼저 나타나는 것을 반환합니다.
- 대소문자는 구분하지 않지만, 답은 `words`에서 나타나는 원래 대소문자로 반환해야 합니다.

### 예제

**Example 1:**

- Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
- Output: "steps"
- 설명: licensePlate에는 문자 's', 't', 'p'가 포함되어 있습니다. "step"에는 't'와 'p'가 포함되어 있지만 's'가 두 개 필요한데 하나만 있습니다. "steps"에는 필요한 모든 문자가 포함되어 있습니다. "stripe"에는 's'가 하나만 있습니다. "stepple"에는 필요한 모든 문자가 포함되어 있습니다. "steps"와 "stepple" 중에서 "steps"가 더 짧으므로 답은 "steps"입니다.

**Example 2:**

- Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
- Output: "pest"
- 설명: licensePlate에는 문자 's'가 포함되어 있습니다. "pest", "stew", "show"는 모두 문자 's'를 포함하고 있습니다. "looks"에는 's'가 포함되어 있지 않습니다. "pest", "stew", "show" 중에서 "pest"가 가장 짧으므로 답은 "pest"입니다.

## 제한사항

- 1 <= licensePlate.length <= 7
- licensePlate는 숫자, 문자, 공백으로만 이루어져 있습니다.
- 1 <= words.length <= 1000
- 1 <= words[i].length <= 15
- words[i]는 소문자로만 이루어져 있습니다.

## 문제 풀이

처음 풀이는 우선 licensePlate에 문자만 분류하여 map에 담아 분포도를 조사했다. 그리고 words 배열에 반복문과 이중 반복문으로 char 하나하나 순회하며 map에 있는 값을 뺴주고 0으로만들었고 0이 아닌 숫자가 나오면 Completing Word가 아니라고 판단 하는 식으로 문제를 풀었다. map 원본은 유지 해여함으로 structuredClone으로 map을 깊은 복사를 해주고 원본을 유지 했고 임의의 a 16글자를 설정하고 짧은 단어를 찾아 배치했다 이렇게 푸니 정답은 맞았지만 효율이 정말 그지 같았아 그래서

최적화된 방법을 시도해보았다 반복문을 돌때마다 깊은 복사를 진행하지 않고 새로운 단어의 분포도를 조사 후 두 Map을 비교하여 처리하였다 그리고 문자 length를 임의로 가장 긴 값으로 설 정 후 분포도 조사를 할때 해당 값보다 큰 단어는 애초에 조사를 안하게 만들고 Completing Word을 찾으면 해당 단어의 length를 초기화 해주었다.
