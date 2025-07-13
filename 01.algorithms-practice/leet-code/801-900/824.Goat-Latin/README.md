# LeetCode 824. Goat Latin

## 문제 설명

문자열 `sentence`가 주어집니다. 이 문장을 "Goat Latin"으로 변환해야 합니다.

Goat Latin의 규칙은 다음과 같습니다:

1. 단어가 모음('a', 'e', 'i', 'o', 'u')으로 시작하면, 단어 끝에 "ma"를 추가합니다.
2. 단어가 자음으로 시작하면, 첫 번째 문자를 단어 끝으로 이동시키고 "ma"를 추가합니다.
3. 문장에서 i번째 단어에는 끝에 'a'를 i개 추가합니다 (1-based 인덱스).

예를 들어, 첫 번째 단어는 'a' 1개, 두 번째 단어는 'a' 2개, 세 번째 단어는 'a' 3개를 추가합니다.

변환된 문장을 반환합니다.

### 예제

**Example 1:**

- Input: sentence = "I speak Goat Latin"
- Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
- 설명:
- "I" (모음으로 시작) -> "Ima" + "a" = "Imaa"
- "speak" (자음으로 시작) -> "peaks" + "ma" + "aa" = "peaksmaaa"
- "Goat" (자음으로 시작) -> "oatG" + "ma" + "aaa" = "oatGmaaaa"
- "Latin" (자음으로 시작) -> "atinL" + "ma" + "aaaa" = "atinLmaaaaa"

**Example 2:**

- Input: sentence = "The quick brown fox jumped over the lazy dog"
- Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

## 제한사항

- 1 <= sentence.length <= 150
- sentence는 영어 문자와 공백으로만 구성됩니다.
- sentence에는 선행 또는 후행 공백이 없습니다.
- sentence의 모든 단어는 공백 하나로 구분됩니다.

## 문제 풀이

문제가 가이드 하는 데로 코드를 구현하면 된다.

1. 모음인지 자음인지를 모음을 set으로 만들어 빠르게 탐색할수 있게 한다.
2. 전달 받은 sentence를 배열로 만들어 반복문을 돌아 단어를 뽑아낸다.
3. 해당 단어의 앞이 자음인지 모음인지 판단하고 각각의 조건들 구현한다.

- 모음인 경우 문자 뒤에 'ma' 를 붙인다.
- 자음인 경우 가장 앞 문자를 뒤로 보내고 'ma'를 붙인다.
- 인덱스별로 'a'를 추가한다.
