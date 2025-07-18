# LeetCode 888. Fair Candy Swap

## 문제 설명

Alice와 Bob은 서로 다른 크기의 사탕 상자들을 가지고 있습니다. aliceSizes[i]는 Alice가 가진 i번째 사탕 상자의 사탕 개수이고, bobSizes[j]는 Bob이 가진 j번째 사탕 상자의 사탕 개수입니다.

그들은 친구이므로, 교환 후 둘 다 같은 총 사탕 개수를 갖도록 사탕 상자를 하나씩 교환하고 싶어합니다. (한 사람이 가진 총 사탕 개수는 그 사람이 가진 모든 사탕 상자의 사탕 개수의 합입니다.)

정수 배열 answer를 반환하세요. 여기서 answer[0]은 Alice가 교환해야 하는 상자의 사탕 개수이고, answer[1]은 Bob이 교환해야 하는 상자의 사탕 개수입니다.

여러 답이 있다면 그 중 아무거나 반환해도 됩니다. 적어도 하나의 답이 존재한다는 것이 보장됩니다.

### 예제

**Example 1:**

- Input: aliceSizes = [1,1], bobSizes = [2,2]
- Output: [1,2]

**Example 2:**

- Input: aliceSizes = [1,2], bobSizes = [2,3]
- Output: [1,2]

**Example 3:**

- Input: aliceSizes = [2], bobSizes = [1,3]
- Output: [2,3]

## 제한사항

- 1 <= aliceSizes.length, bobSizes.length <= 10^4
- 1 <= aliceSizes[i], bobSizes[j] <= 10^5
- Alice와 Bob의 총 사탕 개수는 다릅니다
- 답이 존재한다는 것이 보장됩니다

## 문제 풀이

가장먼저 target 값을 구해여한다. target값은 두 배열의 총 합 /2 로 구할 수 있다.
target을 구했다면 기준 배열을 하나 정한 뒤 나머지 배열을 map으로 값 : 인덱스로 값을 설정해준다 이유는 검색을 빠르게 하기 위해서 이다. 이때 중복된 값이 여러개 있다고 하더라도 상관이 없다 문제에서는 값이 여러개라고 하더라도 하나만 반환하면 정답으로 처리해 준다고 하였기 떄문, map을 만든뒤 기준 배열을 반복하며 target - 기준배열 Sum + 기준배열[i]로 rest 값을 구한다 rest 값으로 bobMap에 존재하는지 체크 후 있다면 [size, rest]로 정답을 리턴하면 된다.
