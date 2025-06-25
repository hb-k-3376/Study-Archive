# LeetCode 599. Minimum Index Sum of Two Lists

## 문제 설명

두 리스트에서 공통 요소 중 인덱스 합이 최소인 요소들을 찾는 문제입니다.

두 문자열 배열 list1과 list2가 주어졌을 때, 두 리스트에 모두 포함된 문자열들 중에서 인덱스 합이 최소인 모든 문자열을 찾아야 합니다.

인덱스 합은 문자열이 list1에서의 인덱스와 list2에서의 인덱스를 더한 값입니다.

### 예제

**Example 1:**

- Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
- Output: ["Shogun"]
- 설명: "Shogun"이 유일한 공통 문자열이고, list1에서 인덱스 0, list2에서 인덱스 3이므로 인덱스 합은 3입니다.

**Example 2:**

- Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
- Output: ["Shogun"]
- 설명:
- "Shogun": 인덱스 합 = 0 + 1 = 1
- "Burger King": 인덱스 합 = 2 + 2 = 4
- "KFC": 인덱스 합 = 3 + 0 = 3
- 최소 인덱스 합은 1이므로 "Shogun"을 반환합니다.

**Example 3:**

- Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
- Output: ["sad","happy"]
- 설명:
- "happy": 인덱스 합 = 0 + 1 = 1
- "sad": 인덱스 합 = 1 + 0 = 1
- "good": 인덱스 합 = 2 + 2 = 4
- 최소 인덱스 합은 1이므로 ["sad","happy"]를 반환합니다.

## 제한사항

- 1 <= list1.length, list2.length <= 1000
- 1 <= list1[i].length, list2[i].length <= 30
- list1[i]와 list2[i]는 공백으로 구성됨
- list1의 모든 문자열은 유일함
- list2의 모든 문자열은 유일함

## 문제 풀이

두개의 배열을 각각 돌면서 값 : 인덱스로 매핑을 한 후
하나의 배열을 선택하여 순회 하면서 맵을 이용하려 두 배열에 같이 존재하는 요소를 찾고
그 값의 인덱스를 더한다. 미리 준비한 min = Infinity 를 이용하려 더작 은 값을 찾고 찾았다면 answer를 변경하고
같은 같이라면 배열에 추가한다.
