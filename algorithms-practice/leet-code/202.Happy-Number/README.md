## 문제 설명

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

## 제한사항

n == nums.length
1 <= n <= 5 \* 104
-109 <= nums[i] <= 109

## 문제 풀이

처음 문제 풀이는 hash map을 사용하여 간단하게 풀었다. 우선 객체를 맵처럼 사용하여
반복문을 돌면서 배열의 요소들을 저장하고 재등장할떄마다 카운트를 하였고
반복문이 끝까지 다 돌면, Object.entries 함수로 키와 벨류 값을 꺼내어 내림차순으로 정렬 후 가장 큰 벨루의 키값을 꺼내보았다.

하지만 Follow-up: Could you solve the problem in linear time and in O(1) space? 이라는 추가 요소가 있다
위에서 풀 문제도 결과 값을 도출해 낼 수 있지만
추가 공간 값은 추가 해쉬 (O(n)) + Object.entries로 배열 (O(n)) + sort (O(log n)) = O(n)이 발생한다.

찾아보니 Boyer-Moore 투표 알고리즘을 사용하면 O(1)의 공간 복잡도를 가져갈 수 있다고 한다.
먼저 Boyer-Moore 알고리즘 사용할 수 있는 조건은 majority element가 충족해야한다 이는
The majority element is the element that appears more than ⌊n / 2⌋ times. 과반수를 차지하는 요소는
주어진 배열의 절반 이상을 차지한다는 조건이 있으면 된다. 자세한 풀이는 solution에서..
